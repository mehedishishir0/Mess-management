"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Receipt,
  Settings2,
  SlidersHorizontal,
  Trash2,
  Users,
  Utensils,
  WalletCards,
  X,
} from "lucide-react";

type Member = { id: string; name: string; initials: string; color: string };
type MealDay = {
  date: string;
  label: string;
  counts: Record<string, number>;
  total: number;
};
type Utility = { id: string; name: string; amount: number };
type Override = { utilities?: number; mealRate?: number };
type MemberExpenses = Record<string, Record<string, number>>;

type Settlement = Member & {
  meals: number;
  groceries: number;
  mealCost: number;
  mealNet: number;
  utilityShare: number;
  finalCost: number;
  paid: number;
  balance: number;
};

const expenseCategories = [
  "Advance Deposit",
  "Daily Market",
  "Big Market Share",
];

const initialExpenses: MemberExpenses = {};
const initialUtilities: Utility[] = [];

function monthKeyToLabel(monthKey: string) {
  const [year, month] = monthKey.split('-').map(Number)
  const date = new Date(year, month - 1, 1)
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)
}

function getCurrentMonthKey() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

function changeMonthKey(monthKey: string, delta: number) {
  const [year, month] = monthKey.split('-').map(Number)
  const date = new Date(year, month - 1 + delta, 1)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function money(value: number) {
  return `৳ ${Number(value).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-foreground"
    >
      {children}
    </button>
  );
}

function SectionTitle({
  icon: Icon,
  eyebrow,
  title,
  action,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={18} />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
      </div>
      {action}
    </div>
  );
}

export default function MessFlowDashboard() {
  const [members, setMembers] = useState<Member[]>([]);
  const [days, setDays] = useState<MealDay[]>([]);
  const [expenses, setExpenses] = useState<MemberExpenses>({});
  const [utilities, setUtilities] = useState<Utility[]>([]);
  const [overrides, setOverrides] = useState<Record<string, Override>>({});
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthKey());
  const [activeNav, setActiveNav] = useState("Overview");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [syncStatus, setSyncStatus] = useState("Loading shared data…");

  async function persist(payload: Record<string, unknown>) {
    setSyncStatus("Saving…");
    try {
      const response = await fetch(`/api/messflow?month=${selectedMonth}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Save failed");
      setSyncStatus("Saved to MongoDB");
    } catch {
      setSyncStatus("Local changes only — add MONGODB_URI to sync");
    }
  }

  useEffect(() => {
    fetch(`/api/messflow?month=${selectedMonth}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Database unavailable");
        const data = await response.json();
        const nextMembers = data.members.map(
          (member: Member & { externalId: string }) => ({
            id: member.externalId,
            name: member.name,
            initials: member.initials,
            color: member.color,
          }),
        );
        setMembers(nextMembers);
        setDays(
          data.days.map(
            (day: {
              date: string;
              label: string;
              entries: { memberId: string; count: number }[];
            }) => ({
              date: day.date,
              label: day.label,
              counts: Object.fromEntries(
                day.entries.map((entry) => [
                  data.members.find(
                    (member: { id: string; externalId: string }) =>
                      member.id === entry.memberId,
                  )?.externalId,
                  entry.count,
                ]),
              ),
              total: day.entries.reduce((sum, entry) => sum + entry.count, 0),
            }),
          ),
        );
        setExpenses(
          data.expenses.reduce(
            (acc: MemberExpenses, expense: { memberId: string; category: string; amount: number }) => {
              const memberKey = data.members.find(
                (member: { id: string; externalId: string }) =>
                  member.id === expense.memberId,
              )?.externalId;
              if (!memberKey) return acc;
              return {
                ...acc,
                [memberKey]: {
                  ...acc[memberKey],
                  [expense.category]: expense.amount,
                },
              };
            },
            {},
          ),
        );
        setUtilities(
          data.utilities.map((utility: Utility & { externalId: string }) => ({
            id: utility.externalId,
            name: utility.name,
            amount: utility.amount,
          })),
        );
        setOverrides(
          Object.fromEntries(
            data.overrides.map(
              (override: {
                memberId: string;
                utilities?: number;
                mealRate?: number;
              }) => [
                data.members.find(
                  (member: { id: string; externalId: string }) =>
                    member.id === override.memberId,
                )?.externalId,
                {
                  utilities: override.utilities ?? undefined,
                  mealRate: override.mealRate ?? undefined,
                },
              ],
            ),
          ),
        );
        setSyncStatus("Synced with MongoDB");
      })
      .catch(() => setSyncStatus("Unable to sync with MongoDB"));
  }, [selectedMonth]);

  const calculated = useMemo(() => {
    const totalMeals = days.reduce(
      (sum, day) =>
        sum +
        members.reduce(
          (inner, member) => inner + (day.counts[member.id] ?? 0),
          0,
        ),
      0,
    );
    const grocerySpend = Object.values(expenses).reduce(
      (sum, categories) =>
        sum +
        Object.values(categories).reduce(
          (categorySum, amount) => categorySum + (Number(amount) || 0),
          0,
        ),
      0,
    );
    const mealRate = totalMeals ? grocerySpend / totalMeals : 0;
    const utilityTotal = utilities.reduce(
      (sum, utility) => sum + (Number(utility.amount) || 0),
      0,
    );
    const customUtilityTotal = members.reduce((sum, member) => {
      const customShare = overrides[member.id]?.utilities;
      return sum + (customShare !== undefined ? Number(customShare) : 0);
    }, 0);
    const customMemberCount = members.reduce(
      (count, member) =>
        count + (overrides[member.id]?.utilities !== undefined ? 1 : 0),
      0,
    );
    const defaultMemberCount = Math.max(0, members.length - customMemberCount);
    const remainingUtilityBill = utilityTotal - customUtilityTotal;
    const defaultUtilityShare =
      defaultMemberCount > 0
        ? remainingUtilityBill / defaultMemberCount
        : members.length
        ? utilityTotal / members.length
        : 0;
    const settlements: Settlement[] = members.map((member) => {
      const meals = days.reduce(
        (sum, day) => sum + (day.counts[member.id] ?? 0),
        0,
      );
      const totalGiven = Object.values(expenses[member.id] ?? {}).reduce(
        (sum, amount) => sum + (Number(amount) || 0),
        0,
      );
      const mealCost = meals * (overrides[member.id]?.mealRate ?? mealRate);
      const customShare = overrides[member.id]?.utilities;
      const utilityShare =
        customShare !== undefined ? customShare : defaultUtilityShare;
      const finalCost = mealCost + utilityShare;
      const mealNet = totalGiven - mealCost;
      const balance = totalGiven - finalCost;
      return {
        ...member,
        meals,
        groceries: totalGiven,
        mealCost,
        mealNet,
        utilityShare,
        finalCost,
        paid: totalGiven,
        balance,
      };
    });
    return {
      totalMeals,
      grocerySpend,
      mealRate,
      utilityTotal,
      customUtilityTotal,
      customMemberCount,
      defaultMemberCount,
      remainingUtilityBill,
      defaultUtilityShare,
      settlements,
      totalCost: grocerySpend + utilityTotal,
    };
  }, [days, expenses, members, utilities, overrides]);

  function updateMeal(dayIndex: number, memberId: string, value: string) {
    const count = Math.max(0, Math.min(3, Number(value) || 0));
    setDays((current) =>
      current.map((day, index) =>
        index === dayIndex
          ? {
              ...day,
              counts: { ...day.counts, [memberId]: count },
              total: Object.values({ ...day.counts, [memberId]: count }).reduce(
                (sum, item) => sum + item,
                0,
              ),
            }
          : day,
      ),
    );
    void persist({
      action: "meal",
      dayId: days[dayIndex]?.date,
      memberId,
      count,
    });
  }

  function addMember() {
    const name = window.prompt("Member name")?.trim();
    if (!name) return;
    const id = `${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${Date.now()}`;
    setMembers((current) => [
      ...current,
      {
        id,
        name,
        initials: name.slice(0, 2).toUpperCase(),
        color: "bg-primary",
      },
    ]);
    setExpenses((current) => ({ ...current, [id]: {} }));
    void persist({ action: "member", name });
  }

  function removeMember(id: string) {
    setMembers((current) => current.filter((member) => member.id !== id));
    setExpenses((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
    setOverrides((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
    setDays((current) =>
      current.map((day) => {
        const counts = { ...day.counts };
        delete counts[id];
        return {
          ...day,
          counts,
          total: Object.values(counts).reduce((sum, item) => sum + item, 0),
        };
      }),
    );
    void persist({ action: "memberRemove", memberId: id });
  }

  function updateMemberName(id: string, name: string) {
    const normalized = name.trim();
    if (!normalized) return;
    setMembers((current) =>
      current.map((member) =>
        member.id === id
          ? {
              ...member,
              name: normalized,
              initials: normalized.slice(0, 2).toUpperCase(),
            }
          : member,
      ),
    );
    void persist({ action: "memberUpdate", memberId: id, name: normalized });
  }

  function updateExpense(memberId: string, category: string, amount: number) {
    setExpenses((current) => ({
      ...current,
      [memberId]: {
        ...current[memberId],
        [category]: amount,
      },
    }));
    void persist({ action: "expense", memberId, category, amount });
  }

  function updateUtility(id: string, nextName: string, nextAmount: number) {
    setUtilities((current) =>
      current.map((utility) =>
        utility.id === id
          ? { ...utility, name: nextName, amount: nextAmount }
          : utility,
      ),
    );
    void persist({ action: "utility", id, name: nextName, amount: nextAmount });
  }

  function removeUtility(id: string) {
    setUtilities((current) => current.filter((utility) => utility.id !== id));
    void persist({ action: "utilityRemove", id });
  }

  function updateOverride(memberId: string, utilitiesValue: string) {
    const utilities =
      utilitiesValue === "" ? undefined : Number(utilitiesValue);
    setOverrides((current) => ({
      ...current,
      [memberId]: { ...current[memberId], utilities },
    }));
    void persist({
      action: "override",
      memberId,
      utilities,
      mealRate: overrides[memberId]?.mealRate,
    });
  }

  function addUtility() {
    const name = window.prompt("Utility name")?.trim();
    if (!name) return;
    const amount = Number(window.prompt("Amount in rupees") || 0);
    if (!Number.isFinite(amount) || amount < 0) return;
    const id = `${name}-${Date.now()}`;
    setUtilities((current) => [...current, { id, name, amount }]);
    void persist({ action: "utility", id, name, amount });
  }

  function exportXlsx() {
    const rows = calculated.settlements.map(
      ({
        name,
        meals,
        groceries,
        mealCost,
        mealNet,
        utilityShare,
        finalCost,
        balance,
      }) => ({
        Member: name,
        "Meal Count": meals,
        "Total Given (E)": groceries,
        "Meal Cost (G)": mealCost.toFixed(2),
        "Meal Net Balance (E - G)": mealNet.toFixed(2),
        "Utility Share (I)": utilityShare.toFixed(2),
        "Total Final Cost (G + I)": finalCost.toFixed(2),
        "Final Settlement Balance": balance.toFixed(2),
        "Final Settlement Status": Math.abs(balance) < 0.005 ? "Clear" : balance > 0 ? `Receive ${money(balance)}` : `Pay ${money(Math.abs(balance))}`,
      }),
    );
    const sheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "Settlement");
    XLSX.writeFile(
      workbook,
      `messflow-${monthKeyToLabel(selectedMonth).toLowerCase().replaceAll(" ", "-")}.xlsx`,
    );
  }

  function exportPdf() {
    window.print();
  }

  const nav = [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Meals", icon: Utensils },
    { label: "Expenses", icon: Receipt },
    { label: "Utilities", icon: SlidersHorizontal },
    { label: "Members", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-sidebar px-5 py-6 transition-transform lg:translate-x-0 ${showMobileNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Utensils size={20} />
            </span>
            <div>
              <p className="font-semibold tracking-tight">MessFlow</p>
              <p className="text-xs text-muted-foreground">
                Shared living, simplified.
              </p>
            </div>
          </div>
          <IconButton
            label="Close navigation"
            onClick={() => setShowMobileNav(false)}
          >
            <X size={18} />
          </IconButton>
        </div>
        <nav
          className="mt-12 flex flex-1 flex-col gap-2"
          aria-label="Primary navigation"
        >
          {nav.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => {
                setActiveNav(label);
                setShowMobileNav(false);
              }}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${activeNav === label ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-primary">
            <CircleDollarSign size={17} />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Month total
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold">
            {money(calculated.totalCost)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Meals + utilities
          </p>
        </div>
      </aside>
      {showMobileNav && (
        <button
          aria-label="Close menu overlay"
          className="fixed inset-0 z-20 bg-background/70 lg:hidden"
          onClick={() => setShowMobileNav(false)}
        />
      )}

      <main className="lg:pl-64">
        <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-border bg-background/95 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5 md:px-8 print:hidden">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <IconButton
              label="Open navigation"
              onClick={() => setShowMobileNav(true)}
            >
              <Menu size={20} />
            </IconButton>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Good evening, Arjun
              </p>
              <h1 className="text-xl font-semibold tracking-tight">
                {activeNav === "Overview" ? "Mess overview" : activeNav}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, -1))}
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground transition hover:bg-accent sm:flex"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium hidden sm:flex">
              <CalendarDays size={16} className="text-muted-foreground" />
              {monthKeyToLabel(selectedMonth)}
            </div>
            <input
              type="month"
              value={selectedMonth}
              onChange={(event) => setSelectedMonth(event.target.value)}
              className="rounded-lg border border-border bg-card px-2 py-2 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring sm:block"
            />
            <button
              onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, 1))}
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground transition hover:bg-accent sm:flex"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={exportXlsx}
              className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition hover:bg-accent md:flex"
            >
              <ArrowDownToLine size={16} />
              Export XLSX
            </button>
            <button
              onClick={exportPdf}
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <FileText size={16} />
              PDF
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-5 md:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-primary">
                {monthKeyToLabel(selectedMonth)} · Apartment 4B
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                A clearer view of what everyone owes.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Keep meal counts, shared bills, and settlements in one calm
                workspace. Every figure below updates as you edit.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm">
              <span className="size-2 rounded-full bg-chart-2" />
              {members.length} active members
            </div>
          </div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              label="Total meals"
              value={calculated.totalMeals.toLocaleString("en-IN")}
              note={`${days.length} days logged`}
              icon={Utensils}
            />
            <MetricCard
              label="Grocery spend"
              value={money(calculated.grocerySpend)}
              note="Entered by members"
              icon={WalletCards}
            />
            <MetricCard
              label="Meal rate"
              value={money(calculated.mealRate)}
              note="Per meal · groceries / meals"
              icon={BarChart3}
            />
            <MetricCard
              label="Utilities"
              value={money(calculated.utilityTotal)}
              note={`${utilities.length} shared bills`}
              icon={CircleDollarSign}
            />
          </section>

          <section className="mt-10">
            <SectionTitle
              icon={Utensils}
              eyebrow="Daily log"
              title="Meal calendar"
              action={
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, -1))}
                    className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium">
                    {monthKeyToLabel(selectedMonth)}
                  </span>
                  <button
                    onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, 1))}
                    className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              }
            />
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:min-w-[780px]">
                  <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="w-24 px-4 py-3 font-medium">Date</th>
                      {members.map((member) => (
                        <th key={member.id} className="px-3 py-3 font-medium">
                          {member.name}
                        </th>
                      ))}
                      <th className="px-4 py-3 text-right font-medium">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {days.map((day, index) => (
                      <tr
                        key={`${day.date}-${day.label}`}
                        className="transition hover:bg-muted/30"
                      >
                        <td className="px-4 py-2.5">
                          <span className="font-semibold">{day.date}</span>
                          <span className="ml-2 text-xs text-muted-foreground">
                            {day.label}
                          </span>
                        </td>
                        {members.map((member) => (
                          <td key={member.id} className="px-3 py-2.5">
                            <input
                              aria-label={`${member.name} meals on ${day.label} ${day.date}`}
                              type="number"
                              min="0"
                              max="3"
                              value={day.counts[member.id] ?? 0}
                              onChange={(event) =>
                                updateMeal(index, member.id, event.target.value)
                              }
                              className="w-16 rounded-lg border border-input bg-background px-2 py-1.5 text-center font-medium outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                            />
                          </td>
                        ))}
                        <td className="px-4 py-2.5 text-right font-semibold text-primary">
                          {day.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs text-muted-foreground">
                <span>
                  Meal counts: breakfast + lunch + dinner, max 3 per day.
                </span>
                <span className="font-semibold text-foreground">
                  {calculated.totalMeals} total meals logged
                </span>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle
              icon={ArrowUpRight}
              eyebrow="Close the month"
              title="Settlement summary"
              action={
                <button
                  onClick={exportXlsx}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  <ArrowDownToLine size={16} />
                  Download report
                </button>
              }
            />
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:min-w-[930px]">
                  <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Member</th>
                      <th className="px-4 py-3 text-right font-medium">
                        Meal Count
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Total Given (E)
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Meal Cost (G)
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Meal Net Balance (E - G)
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Utility Share (I)
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Total Final Cost (G + I)
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Final Settlement Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {calculated.settlements.map((row) => (
                      <tr key={row.id} className="hover:bg-muted/30">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${row.color}`}
                            >
                              {row.initials}
                            </span>
                            <span className="font-semibold">{row.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">{row.meals}</td>
                        <td className="px-4 py-3 text-right">
                          {money(row.groceries)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {money(row.mealCost)}
                        </td>
                        <td
                          className={`px-4 py-3 text-right font-medium ${row.mealNet > 0 ? "text-chart-2" : row.mealNet < 0 ? "text-destructive" : "text-muted-foreground"}`}
                        >
                          {row.mealNet > 0 ? "+" : row.mealNet < 0 ? "-" : ""}
                          {money(Math.abs(row.mealNet))}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {money(row.utilityShare)}
                        </td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {money(row.finalCost)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${Math.abs(row.balance) < 0.005 ? "bg-muted text-muted-foreground" : row.balance > 0 ? "bg-emerald-100 text-emerald-800" : "bg-orange-100 text-orange-800"}`}
                          >
                            {Math.abs(row.balance) < 0.005
                              ? "Clear"
                              : row.balance > 0
                                ? `Receive ${money(row.balance)}`
                                : `Give ${money(Math.abs(row.balance))}`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-4">
                <p className="text-sm text-muted-foreground">
                  Settlements account for meal rate, utilities, overrides, and
                  payments.
                </p>
                <p className="text-sm font-semibold">
                  House total{" "}
                  <span className="ml-2 text-primary">
                    {money(calculated.totalCost)}
                  </span>
                </p>
              </div>
            </div>
          </section>

          <div className="mt-10 grid gap-10 xl:grid-cols-[1fr_1.2fr]">
            <section>
              <SectionTitle
                icon={Receipt}
                eyebrow="Input ledger"
                title="Member payments"
                action={
                  <span className="text-xs text-muted-foreground">
                    Update advance, daily market, and big market share
                  </span>
                }
              />
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:min-w-[680px]">
                    <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Member</th>
                        {expenseCategories.map((category) => (
                          <th key={category} className="px-4 py-3 text-right font-medium">
                            {category}
                          </th>
                        ))}
                        <th className="px-4 py-3 text-right font-medium">Total Given (E)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {members.map((member) => {
                        const memberExpenses = expenses[member.id] ?? {};
                        const totalGiven = expenseCategories.reduce(
                          (sum, category) => sum + (Number(memberExpenses[category]) || 0),
                          0,
                        );
                        return (
                          <tr key={member.id} className="hover:bg-muted/30">
                            <td className="px-4 py-3 font-semibold">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${member.color}`}
                                >
                                  {member.initials}
                                </span>
                                <span>{member.name}</span>
                              </div>
                            </td>
                            {expenseCategories.map((category) => (
                              <td key={category} className="px-4 py-3 text-right">
                                <input
                                  type="number"
                                  min={0}
                                  value={memberExpenses[category] ?? 0}
                                  onChange={(event) =>
                                    updateExpense(
                                      member.id,
                                      category,
                                      Number(event.target.value) || 0,
                                    )
                                  }
                                  className="w-28 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                                />
                              </td>
                            ))}
                            <td className="px-4 py-3 text-right font-semibold">
                              {money(totalGiven)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section>
              <SectionTitle
                icon={Settings2}
                eyebrow="Shared bills"
                title="Utilities & overrides"
                action={
                  <button
                    onClick={addUtility}
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Plus size={16} />
                    Add utility
                  </button>
                }
              />
              <div className="mt-4 rounded-2xl border border-border bg-card p-4">
                <div className="flex flex-col gap-3">
                  {utilities.map((utility) => (
                    <div
                      key={utility.id}
                      className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <input
                          value={utility.name}
                          onChange={(event) =>
                            updateUtility(
                              utility.id,
                              event.target.value,
                              utility.amount,
                            )
                          }
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                        <p className="text-xs text-muted-foreground">
                          Utility name
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Rs</span>
                        <input
                          type="number"
                          value={utility.amount}
                          onChange={(event) =>
                            updateUtility(
                              utility.id,
                              utility.name,
                              Number(event.target.value) || 0,
                            )
                          }
                          className="w-28 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                        <IconButton
                          label={`Remove ${utility.name}`}
                          onClick={() => removeUtility(utility.id)}
                        >
                          <Trash2 size={16} />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 border-t border-border pt-3 text-sm">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Total utilities</span>
                      <span className="text-primary">
                        {money(calculated.utilityTotal)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {members.length
                        ? calculated.customMemberCount > 0
                          ? `Remaining bill ${money(calculated.remainingUtilityBill)} split among ${calculated.defaultMemberCount} member${calculated.defaultMemberCount === 1 ? '' : 's'} (${money(calculated.defaultUtilityShare)} each)`
                          : `No custom members. Total utilities split evenly among ${members.length} member${members.length === 1 ? '' : 's'} (${money(calculated.defaultUtilityShare)} each)`
                        : 'Add members to calculate utility shares.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10">
            <SectionTitle
              icon={Users}
              eyebrow="Household"
              title="Members & utility overrides"
              action={
                <button
                  onClick={addMember}
                  className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Plus size={16} />
                  Add member
                </button>
              }
            />
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-sm sm:min-w-[680px]">
                  <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Member</th>
                      <th className="px-4 py-3 text-right font-medium">
                        Meals
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Default utilities
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Custom utility share
                      </th>
                      <th className="px-4 py-3 text-right font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {calculated.settlements.map((row) => (
                      <tr key={row.id}>
                        <td className="px-4 py-3 font-semibold">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(event) =>
                              updateMemberName(row.id, event.target.value)
                            }
                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </td>
                        <td className="px-4 py-3 text-right">{row.meals}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          {money(calculated.defaultUtilityShare)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <input
                            type="number"
                            placeholder="Default"
                            value={overrides[row.id]?.utilities ?? ""}
                            onChange={(event) =>
                              updateOverride(row.id, event.target.value)
                            }
                            className="w-28 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => updateOverride(row.id, "")}
                            className="text-xs font-medium text-muted-foreground hover:text-foreground"
                          >
                            Reset
                          </button>
                          {members.length > 1 && (
                            <button
                              aria-label={`Remove ${row.name}`}
                              onClick={() => removeMember(row.id)}
                              className="ml-3 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground print:hidden">
            <span>
              MessFlow keeps your shared numbers transparent.{" "}
              <span className="text-primary">{syncStatus}</span>
            </span>
            <span>
              Last edited just now ·{" "}
              <button
                onClick={exportPdf}
                className="font-medium text-primary hover:underline"
              >
                Print a copy
              </button>
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function MetricCard({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
        <Icon size={18} className="text-primary" />
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
