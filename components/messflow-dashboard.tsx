"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from 'next/navigation'
import * as XLSX from "xlsx";
import {
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Menu,
  Plus,
  Receipt,
  RotateCcw,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  Users,
  Utensils,
  WalletCards,
  X,
} from "lucide-react";

type Member = { id: string; name: string; initials: string; color: string; houseRent: number };
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
  mealRate: number;
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

function MealRateBudgetOptimizer({
  totalMeals,
  currentGrocery,
  currentMealRate,
  daysCount,
  selectedMonth,
}: {
  totalMeals: number;
  currentGrocery: number;
  currentMealRate: number;
  daysCount: number;
  selectedMonth: string;
}) {
  const [targetMealRate, setTargetMealRate] = useState<number>(45);
  const [showTips, setShowTips] = useState<boolean>(false);

  // Interactive Simulation Calculator State
  const [simExtraMeals, setSimExtraMeals] = useState<number>(0);
  const [simExtraMarket, setSimExtraMarket] = useState<number>(0);

  useEffect(() => {
    if (currentMealRate > 0 && Math.abs(targetMealRate - 45) < 0.01) {
      const suggested = Math.max(30, Math.floor(currentMealRate));
      setTargetMealRate(suggested);
    }
  }, [currentMealRate]);

  const presets = [35, 40, 45, 50, 55, 60];

  // Strategy A — Keep Meals Fixed, Adjust Grocery
  const allowedGroceryBudget = targetMealRate * totalMeals;
  const requiredSavings = currentGrocery - allowedGroceryBudget;
  const isOverTarget = currentMealRate > targetMealRate && totalMeals > 0;
  const remainingHeadroom = Math.max(0, allowedGroceryBudget - currentGrocery);

  const monthDaysCount = daysCount || 31;
  const currentMonthKey = getCurrentMonthKey();
  let remainingDays = monthDaysCount;

  if (selectedMonth === currentMonthKey) {
    const today = new Date().getDate();
    remainingDays = Math.max(1, monthDaysCount - today + 1);
  } else if (selectedMonth < currentMonthKey) {
    remainingDays = 1;
  } else {
    remainingDays = monthDaysCount;
  }

  const dailyBudgetLimit = isOverTarget
    ? 0
    : remainingDays > 0
    ? remainingHeadroom / remainingDays
    : 0;

  // Strategy B — Keep Grocery Fixed, Adjust Meal Count
  const requiredTotalMeals = targetMealRate > 0 ? Math.ceil(currentGrocery / targetMealRate) : 0;
  const additionalMealsNeeded = Math.max(0, requiredTotalMeals - totalMeals);
  const dailyMealAvgTarget = monthDaysCount > 0 && requiredTotalMeals > 0
    ? (requiredTotalMeals / monthDaysCount).toFixed(1)
    : "0";

  // Interactive Simulation Math
  const simulatedTotalMeals = Math.max(0, totalMeals + simExtraMeals);
  const simulatedTotalGrocery = Math.max(0, currentGrocery + simExtraMarket);
  const simulatedMealRate = simulatedTotalMeals > 0 ? simulatedTotalGrocery / simulatedTotalMeals : 0;
  const rateDiff = simulatedMealRate - currentMealRate;

  return (
    <section className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles size={22} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                স্মার্ট অপ্টিমাইজার
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  totalMeals === 0
                    ? "bg-muted text-muted-foreground"
                    : isOverTarget
                    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                    : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                }`}
              >
                {totalMeals === 0 ? (
                  "কোনো মিল এন্ট্রি করা হয়নি"
                ) : isOverTarget ? (
                  <>
                    <AlertTriangle size={13} /> টার্গেট অতিক্রম করেছে ⚠️
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={13} /> সঠিক ট্র্যাকে আছে 👍
                  </>
                )}
              </span>
            </div>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              স্মার্ট বাজেট ও মিল রেট অপ্টিমাইজার
            </h2>
          </div>
        </div>

        <button
          onClick={() => setShowTips(!showTips)}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground transition hover:bg-accent"
        >
          <Lightbulb size={16} className="text-amber-500" />
          <span>খরচ কমানোর টিপস</span>
          {showTips ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Target Selector */}
      <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <label htmlFor="target-meal-rate-slider" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              টার্গেট মিল রেট নির্বাচন (টাকা/মিল)
            </label>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">
                ৳ {targetMealRate}
              </span>
              <span className="text-xs text-muted-foreground">
                (বর্তমান মিল রেট: <strong className="text-foreground">৳ {currentMealRate.toFixed(2)}</strong>)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground mr-1">টার্গেট প্রিসেট:</span>
            {presets.map((preset) => (
              <button
                key={preset}
                onClick={() => setTargetMealRate(preset)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                  targetMealRate === preset
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                ৳ {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-xs font-medium text-muted-foreground">৳ ২০</span>
          <input
            id="target-meal-rate-slider"
            aria-label="Target Meal Rate"
            type="range"
            min="20"
            max="100"
            step="1"
            value={targetMealRate}
            onChange={(e) => setTargetMealRate(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-border accent-primary"
          />
          <span className="text-xs font-medium text-muted-foreground">৳ ১০০</span>
        </div>
      </div>

      {/* Dual Strategy Cards */}
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            দ্বিমুখী অপ্টিমাইজেশন স্ট্র্যাটেজি (Multi-Scenario Optimization)
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Card 1: Option A — Control Grocery Budget */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <TrendingDown size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">অপশন এ — বাজার বাজেট নিয়ন্ত্রণ</h4>
                    <p className="text-xs text-muted-foreground">Option A: Control Grocery Spending</p>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
                  মিল স্থির
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                বর্তমান <strong>{totalMeals} টি</strong> মিল অপরিবর্তিত রেখে মিল রেট <strong>৳ {targetMealRate}</strong> তে নামিয়ে আনতে:
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <div className="text-xs text-muted-foreground font-medium">সর্বোচ্চ বাজার বাজেট অনুমোদিত</div>
                  <div className="text-xl font-bold text-foreground mt-0.5">{money(allowedGroceryBudget)}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    (টার্গেট ৳ {targetMealRate} × {totalMeals} টি মিল)
                  </div>
                </div>

                <div className={`rounded-xl border p-3 ${isOverTarget ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"}`}>
                  <div className="text-xs font-medium">
                    {isOverTarget ? "প্রয়োজনীয় বাজার খরচ হ্রাস" : "বাজেট হেডরুম (অবশিষ্ট বাজেট)"}
                  </div>
                  <div className="text-xl font-bold mt-0.5">
                    {isOverTarget ? `- ${money(requiredSavings)}` : `+ ${money(remainingHeadroom)}`}
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    {isOverTarget
                      ? "টার্গেটে পৌঁছাতে আরও এত টাকা বাজার কমানো প্রয়োজন"
                      : "আপনার হাতে এখনও অনুমোদিত বাজার করার বাজেট বাকি আছে"}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2 text-xs">
                  <span className="text-muted-foreground">দৈনিক বাজারের সর্বোচ্চ সীমা ({remainingDays} দিন):</span>
                  <span className="font-bold text-foreground">{money(dailyBudgetLimit)} / প্রতিদিন</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Option B — Increase Meal Volume */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <TrendingUp size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">অপশন বি — মিল সংখ্যা বৃদ্ধি</h4>
                    <p className="text-xs text-muted-foreground">Option B: Increase Meal Volume</p>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
                  বাজার খরচ স্থির
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                বর্তমান বাজার খরচ <strong>{money(currentGrocery)}</strong> অপরিবর্তিত রেখে মিল রেট <strong>৳ {targetMealRate}</strong> তে নামিয়ে আনতে:
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <div className="text-xs text-muted-foreground font-medium">মাসের প্রয়োজনীয় মোট মিল</div>
                  <div className="text-xl font-bold text-foreground mt-0.5">{requiredTotalMeals} টি মিল</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    (বাজার খরচ {money(currentGrocery)} ÷ টার্গেট ৳ {targetMealRate})
                  </div>
                </div>

                <div className={`rounded-xl border p-3 ${additionalMealsNeeded > 0 ? "border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400" : "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400"}`}>
                  <div className="text-xs font-medium">
                    {additionalMealsNeeded > 0 ? "অতিরিক্ত প্রয়োজনীয় মিল সংখ্যা" : "মিল ভলিউম স্ট্যাটাস"}
                  </div>
                  <div className="text-xl font-bold mt-0.5">
                    {additionalMealsNeeded > 0 ? `+ ${additionalMealsNeeded} টি অতিরিক্ত মিল` : "চলতি মিল সংখ্যাতেই টার্গেট অর্জিত!"}
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    {additionalMealsNeeded > 0
                      ? "একই বাজার খরচে টার্গেট মিল রেটে পৌঁছাতে অতিরিক্ত মিল প্রয়োজন"
                      : "আপনার বর্তমান মোট মিল টার্গেট পূরণের জন্য যথেষ্ট"}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2 text-xs">
                  <span className="text-muted-foreground">দৈনিক গড়ে প্রয়োজনীয় মোট মিল Target:</span>
                  <span className="font-bold text-foreground">{dailyMealAvgTarget} টি/দিন</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
              💡 <strong className="text-foreground">স্মার্ট টিপস:</strong> মেম্বারদের অহেতুক মিল অফ রাখা নিরুৎসাহিত করুন। মেসের মোট মিলের সংখ্যা বাড়লে ফিক্সড মশলা, চাল ও তেল খরচ বেশি মিলের মধ্যে ভাগ হয়ে প্রতি মিলের খরচ স্বয়ংক্রিয়ভাবে কমে যায়!
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Simulation Calculator */}
      <div className="mt-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-background p-5 shadow-xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2 text-primary">
            <Calculator size={20} />
            <h3 className="font-semibold text-foreground text-base">ইন্টারেক্টিভ মিল রেট সিমুলেটর (Live Rate Simulation)</h3>
          </div>
          <button
            onClick={() => {
              setSimExtraMeals(0);
              setSimExtraMarket(0);
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition"
          >
            <RotateCcw size={13} />
            <span>সিমুলেশন রিসেট</span>
          </button>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-foreground mb-1.5">
                <span>অতিরিক্ত সম্ভাব্য মিল সংখ্যা (+ Extra Meals):</span>
                <strong className="text-primary font-bold">{simExtraMeals >= 0 ? `+${simExtraMeals}` : simExtraMeals} টি</strong>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={simExtraMeals}
                  onChange={(e) => setSimExtraMeals(Number(e.target.value) || 0)}
                  className="w-24 rounded-xl border border-input bg-background px-3 py-2 text-sm font-semibold text-center outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="flex flex-wrap gap-1.5">
                  {[5, 10, 20, 30].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSimExtraMeals((prev) => prev + num)}
                      className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold hover:bg-accent"
                    >
                      +{num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-medium text-foreground mb-1.5">
                <span>অতিরিক্ত সম্ভাব্য বাজার খরচ (+ Extra Market ৳):</span>
                <strong className="text-primary font-bold">{simExtraMarket >= 0 ? `+৳ ${simExtraMarket}` : `৳ ${simExtraMarket}`}</strong>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={simExtraMarket}
                  onChange={(e) => setSimExtraMarket(Number(e.target.value) || 0)}
                  className="w-28 rounded-xl border border-input bg-background px-3 py-2 text-sm font-semibold text-center outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="flex flex-wrap gap-1.5">
                  {[200, 500, 1000, 2000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSimExtraMarket((prev) => prev + amt)}
                      className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold hover:bg-accent"
                    >
                      +৳{amt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Simulation Output Display */}
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">সিমুলেটেড ফলাফল পূর্বরূপ</span>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-border/60 bg-muted/40 p-2.5">
                <span className="text-muted-foreground block text-[11px]">অনুমিত মোট মিল</span>
                <strong className="text-foreground text-sm font-bold block mt-0.5">{simulatedTotalMeals} টি</strong>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/40 p-2.5">
                <span className="text-muted-foreground block text-[11px]">অনুমিত মোট বাজার</span>
                <strong className="text-foreground text-sm font-bold block mt-0.5">{money(simulatedTotalGrocery)}</strong>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl border border-primary/40 bg-primary/10 p-3">
              <div>
                <span className="text-xs font-semibold text-primary block">ফলাফল নতুন মিল রেট:</span>
                <span className="text-2xl font-black text-foreground">৳ {simulatedMealRate.toFixed(2)}</span>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-muted-foreground block">মিল রেটে প্রভাব:</span>
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                  rateDiff < 0
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                    : rateDiff > 0
                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {rateDiff < 0
                    ? `৳ ${Math.abs(rateDiff).toFixed(2)} কমবে 📉`
                    : rateDiff > 0
                    ? `৳ ${rateDiff.toFixed(2)} বাড়বে 📈`
                    : "কোনো পরিবর্তন নেই"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTips && (
        <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 transition-all">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm">
            <Lightbulb size={18} />
            <span>মিল রেট কম রাখার কার্যকরী উপায়সমূহ</span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs text-foreground/90">
            <div className="rounded-xl border border-border/60 bg-card p-3 shadow-xs">
              <strong className="text-primary block mb-1">📦 পাইকারি কেনাকাটা (Big Market)</strong>
              চাল, সয়াবিন তেল, ডাল, পেঁয়াজ ও মশলা মাসের শুরুতে পাইকারি বা বড় বাজারে একসাথে কিনলে ১০-২০% খরচ বাঁচে।
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3 shadow-xs">
              <strong className="text-primary block mb-1">📋 বাজারের তালিকা মেইনটেইন</strong>
              দৈনিক বাজারে যাওয়ার আগে সুনির্দিষ্ট ফর্দ তৈরি করুন যাতে অতিরিক্ত বা অপ্রয়োজনীয় কেনাকাটা বন্ধ হয়।
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3 shadow-xs">
              <strong className="text-primary block mb-1">🥗 সুষম খাবার পরিকল্পনা</strong>
              প্রতিদিন ভারী মাছ/মাংসের পরিবর্তে সপ্তাহে কয়েকদিন ডিম, ডাল ও সবজির আইটেম রাখলে মিল রেট নিয়ন্ত্রণে থাকে।
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-3 shadow-xs">
              <strong className="text-primary block mb-1">⚖️ সঠিক মিল অফ এন্ট্রি</strong>
              মেসের মেম্বাররা বাইরে গেলে বা বাড়িতে গেলে আগে থেকে মিল অফ রাখা নিশ্চিত করুন যাতে সঠিক মিল গণনা হয়।
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function MessFlowDashboard() {
  const router = useRouter()
  const [members, setMembers] = useState<Member[]>([]);
  const [days, setDays] = useState<MealDay[]>([]);
  const [expenses, setExpenses] = useState<MemberExpenses>({});
  const [utilities, setUtilities] = useState<Utility[]>([]);
  const [overrides, setOverrides] = useState<Record<string, Override>>({});
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthKey());
  const [activeNav, setActiveNav] = useState("Overview");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [syncStatus, setSyncStatus] = useState("Loading shared data…");
  const [messProfile, setMessProfile] = useState<{ messName?: string; managerName?: string } | null>(null);

  // Modals state
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRent, setNewMemberRent] = useState("");

  const [isAddUtilityOpen, setIsAddUtilityOpen] = useState(false);
  const [newUtilityName, setNewUtilityName] = useState("");
  const [newUtilityAmount, setNewUtilityAmount] = useState("");

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'member' | 'utility', id: string, name: string } | null>(null);

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

  function logout() {
    setIsLogoutOpen(true);
  }

  async function handleLogoutConfirm() {
    setIsLogoutOpen(false);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }

  useEffect(() => {
    fetch('/api/auth/session')
      .then(async (response) => {
        const session = await response.json();
        if (session?.authenticated) {
          setMessProfile({
            messName: session.user?.messName,
            managerName: session.user?.managerName,
          });
        }
      })
      .catch(() => undefined);

    fetch(`/api/messflow?month=${selectedMonth}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Database unavailable");
        const data = await response.json();
        const nextMembers = data.members.map(
          (member: Member & { externalId: string; houseRent?: number }) => ({
            id: member.externalId,
            name: member.name,
            initials: member.initials,
            color: member.color,
            houseRent: Number(member.houseRent) || 0,
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
      const effectiveMealRate = overrides[member.id]?.mealRate ?? mealRate;
      const mealCost = meals * effectiveMealRate;
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
        mealRate: effectiveMealRate,
        mealNet,
        utilityShare,
        finalCost,
        paid: totalGiven,
        balance,
      };
    });

    const totalApartmentRent = members.reduce(
      (sum, member) => sum + (Number(member.houseRent) || 0),
      0,
    );

    const grandSettlements = settlements.map((row) => {
      const grandTotalPayable = (Number(row.houseRent) || 0) - row.balance;
      return {
        ...row,
        houseRent: Number(row.houseRent) || 0,
        grandTotalPayable,
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
      grandSettlements,
      totalApartmentRent,
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
    setIsAddMemberOpen(true);
  }

  function handleAddMemberSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const name = newMemberName.trim();
    if (!name) return;

    const id = `${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${Date.now()}`;
    const houseRent = Math.max(0, Number(newMemberRent) || 0);

    setMembers((current) => [
      ...current,
      {
        id,
        name,
        initials: name.slice(0, 2).toUpperCase(),
        color: "bg-primary",
        houseRent,
      },
    ]);
    setExpenses((current) => ({ ...current, [id]: {} }));
    void persist({ action: "member", name });

    setNewMemberName("");
    setNewMemberRent("");
    setIsAddMemberOpen(false);
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

  function updateHouseRent(memberId: string, houseRentValue: string) {
    const houseRent = Math.max(0, Number(houseRentValue) || 0);
    setMembers((current) =>
      current.map((member) =>
        member.id === memberId
          ? { ...member, houseRent }
          : member,
      ),
    );
    void persist({ action: "rent", memberId, houseRent });
  }

  function addUtility() {
    setIsAddUtilityOpen(true);
  }

  function handleAddUtilitySubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const name = newUtilityName.trim();
    if (!name) return;
    const amount = Number(newUtilityAmount || 0);
    if (!Number.isFinite(amount) || amount < 0) return;

    const id = `${name}-${Date.now()}`;
    setUtilities((current) => [...current, { id, name, amount }]);
    void persist({ action: "utility", id, name, amount });

    setNewUtilityName("");
    setNewUtilityAmount("");
    setIsAddUtilityOpen(false);
  }

  function confirmDeleteTarget() {
    if (!deleteTarget) return;
    if (deleteTarget.type === 'member') {
      removeMember(deleteTarget.id);
    } else if (deleteTarget.type === 'utility') {
      removeUtility(deleteTarget.id);
    }
    setDeleteTarget(null);
  }

  function exportXlsx() {
    const rows = calculated.grandSettlements.map(
      ({
        name,
        houseRent,
        meals,
        mealRate,
        groceries,
        mealCost,
        mealNet,
        utilityShare,
        finalCost,
        balance,
        grandTotalPayable,
      }) => ({
        মেম্বার: name,
        "বাসা ভাড়া": houseRent.toFixed(2),
        "মোট মিল": meals,
        "মিল রেট": mealRate ? mealRate.toFixed(2) : "0.00",
        "মোট বাজার জমা (E)": groceries,
        "মিল খরচ (G)": mealCost.toFixed(2),
        "মিল নিট ব্যালেন্স (E - G)": mealNet.toFixed(2),
        "ইউটিলিটি শেয়ার (I)": utilityShare.toFixed(2),
        "সর্বমোট খরচ (G + I)": finalCost.toFixed(2),
        "ফাইনাল সেটেলমেন্ট ব্যালেন্স": balance.toFixed(2),
        "ফাইনাল স্ট্যাটাস": Math.abs(balance) < 0.005 ? "হিসাব সমান" : balance > 0 ? `পাবেন ${money(balance)}` : `দিবেন ${money(Math.abs(balance))}`,
        "সর্বমোট প্রদেয়/আদায়যোগ্য": grandTotalPayable.toFixed(2),
        "গ্র্যান্ড স্ট্যাটাস": Math.abs(grandTotalPayable) < 0.005 ? "হিসাব সমান" : grandTotalPayable > 0 ? `মোট দিবেন ${money(grandTotalPayable)}` : `মোট পাবেন ${money(Math.abs(grandTotalPayable))}`,
      }),
    );
    const sheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, "সেটেলমেন্ট");
    XLSX.writeFile(
      workbook,
      `messflow-${monthKeyToLabel(selectedMonth).toLowerCase().replaceAll(" ", "-")}.xlsx`,
    );
  }

  function exportPdf() {
    window.print();
  }

  const nav = [
    { label: "ওভারভিউ", icon: LayoutDashboard },
    { label: "মিল ক্যালেন্ডার", icon: Utensils },
    { label: "বাজার খরচ", icon: Receipt },
    { label: "ইউটিলিটি ও বিল", icon: SlidersHorizontal },
    { label: "মেম্বারবৃন্দ", icon: Users },
    { label: "সেটিংস", icon: Settings2 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-sidebar px-5 py-6 transition-transform lg:translate-x-0 ${showMobileNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex size-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 p-1 shadow-sm">
              <img
                src="/messflow-logo.png"
                alt="MessFlow Official Logo"
                className="size-full object-contain rounded-xl"
              />
            </div>
            <div>
              <p className="font-extrabold tracking-tight text-foreground flex items-center gap-1.5">
                <span>মেসফ্লো</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-1.5 py-0.5 rounded-md border border-primary/20">PRO</span>
              </p>
              <p className="text-[10px] text-muted-foreground font-medium">
                ডিজিটাল মেস প্ল্যাটফর্ম
              </p>
            </div>
          </div>
          <IconButton
            label="মেডু বন্ধ করুন"
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
              মাসিক মোট খরচ
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold">
            {money(calculated.totalCost)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            বাজার + ইউটিলিটি বিল
          </p>
        </div>
      </aside>
      {showMobileNav && (
        <button
          aria-label="অভারলে বন্ধ করুন"
          className="fixed inset-0 z-20 bg-background/70 lg:hidden"
          onClick={() => setShowMobileNav(false)}
        />
      )}

      <main className="lg:pl-64">
        <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-border bg-background/95 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5 md:px-8 print:hidden">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <IconButton
              label="মেডু খুলুন"
              onClick={() => setShowMobileNav(true)}
            >
              <Menu size={20} />
            </IconButton>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                {messProfile?.managerName ? `স্বাগতম, ${messProfile.managerName}` : 'স্বাগতম'}
              </p>
              <h1 className="text-xl font-semibold tracking-tight">
                {messProfile?.messName ?? 'আপনার মেস'} · {activeNav === "Overview" || activeNav === "ওভারভিউ" ? "মেসের ওভারভিউ" : activeNav}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
              <button
                title="আগের মাস"
                onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, -1))}
                className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">আগের মাস</span>
              </button>
              
              <div className="flex items-center gap-2 px-2 py-1 text-sm font-semibold text-foreground">
                <CalendarDays size={16} className="text-primary" />
                <span>{monthKeyToLabel(selectedMonth)}</span>
              </div>

              <input
                type="month"
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(event.target.value)}
                className="cursor-pointer rounded-lg bg-transparent px-2 py-1 text-xs text-muted-foreground hover:text-foreground focus:outline-none"
              />

              <button
                title="পরের মাস"
                onClick={() => setSelectedMonth(changeMonthKey(selectedMonth, 1))}
                className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                <span className="hidden sm:inline">পরের মাস</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {selectedMonth !== getCurrentMonthKey() && (
              <button
                onClick={() => setSelectedMonth(getCurrentMonthKey())}
                className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/20"
              >
                চলতি মাস
              </button>
            )}

            <button
              onClick={exportXlsx}
              className="hidden items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium transition hover:bg-accent md:flex"
            >
              <ArrowDownToLine size={16} />
              এক্সেল ডাউনলোড
            </button>
            <button
              onClick={exportPdf}
              className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <FileText size={16} />
              পিডিএফ
            </button>
            <button
              onClick={logout}
              className="rounded-lg border border-destructive/40 px-3 py-2 text-sm font-semibold text-destructive transition hover:bg-destructive/10"
            >
              লগআউট
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-5 md:px-8">
          {/* Top Page Navigation Tabs */}
          <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-border pb-4 print:hidden">
            {nav.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  activeNav === label
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Welcome Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-primary">
                {monthKeyToLabel(selectedMonth)} · {messProfile?.messName ?? 'আপনার মেস'}
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                {(activeNav === "Overview" || activeNav === "ওভারভিউ") && "মেসের ওভারভিউ ও ফিন্যান্সিয়াল সামারি"}
                {(activeNav === "Meals" || activeNav === "মিল ক্যালেন্ডার") && "দৈনিক মিল ক্যালেন্ডার রেজিস্টার"}
                {(activeNav === "Expenses" || activeNav === "বাজার খরচ") && "মেম্বারদের বাজার জমা ও হিসাব"}
                {(activeNav === "Utilities" || activeNav === "ইউটিলিটি ও বিল") && "ইউটিলিটি ও শেয়ার্ড বিল বিলি"}
                {(activeNav === "Members" || activeNav === "মেম্বারবৃন্দ") && "মেম্বারশিপ, বাসা ভাড়া ও কাস্টম চার্জ"}
                {(activeNav === "Settings" || activeNav === "সেটিংস") && "মেস ও প্রোফাইল সেটিংস"}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {(activeNav === "Overview" || activeNav === "ওভারভিউ") && "মেসের সামগ্রিক পরিস্থিতি, মিল রেট অপ্টিমাইজার এবং মাসিক ফাইনাল সেটেলমেন্টের সংক্ষিপ্ত রূপ।"}
                {(activeNav === "Meals" || activeNav === "মিল ক্যালেন্ডার") && "প্রতিদিনের সকাল, দুপুর ও রাতের মিল ট্র্যাক করুন এবং মেম্বারওয়ারী মাসিক মোট মিল নিশ্চিত করুন।"}
                {(activeNav === "Expenses" || activeNav === "বাজার খরচ") && "অ্যাডভান্স জমা, দৈনিক বাজার এবং বড় বাজার শেয়ারের পরিমাণ এন্ট্রি করুন।"}
                {(activeNav === "Utilities" || activeNav === "ইউটিলিটি ও বিল") && "বিদ্যুৎ, গ্যাস, ইন্টারনেট, পানি ও খালা বিল যুক্ত করে সকল মেম্বারের মাঝে বণ্টন করুন।"}
                {(activeNav === "Members" || activeNav === "মেম্বারবৃন্দ") && "মেসের মেম্বারদের নাম, ঘর/বাসা ভাড়া এবং বিশেষ ইউটিলিটি চার্জ কনফিগার করুন।"}
                {(activeNav === "Settings" || activeNav === "সেটিংস") && "আপনার মেসের নাম, ম্যানেজারের নাম এবং অ্যাকাউন্ট সিকিউরিটি পরিবর্তন করুন।"}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm">
              <span className="size-2 rounded-full bg-chart-2" />
              {members.length} জন সক্রিয় মেম্বার
            </div>
          </div>

          {members.length === 0 && (
            <section className="mb-8 rounded-3xl border border-dashed border-primary/50 bg-primary/6 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">প্রথম সেটআপ</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">মেসফ্লোতে আপনাকে স্বাগতম</h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    মেম্বারদের নাম যুক্ত করে এবং বিল ও মিল এন্ট্রি দিয়ে শুরু করুন।
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={addMember} className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">নতুন মেম্বার যুক্ত করুন</button>
                  <button onClick={addUtility} className="rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-accent">ইউটিলিটি বিল লিখুন</button>
                </div>
              </div>
            </section>
          )}

          {/* VIEW 1: OVERVIEW PAGE */}
          {(activeNav === "Overview" || activeNav === "ওভারভিউ") && (
            <div className="space-y-8">
              {/* High level Metric Cards */}
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  label="মোট মিল"
                  value={calculated.totalMeals.toLocaleString("bn-BD")}
                  note={`${days.length} দিনের এন্ট্রি`}
                  icon={Utensils}
                />
                <MetricCard
                  label="মোট বাজার খরচ"
                  value={money(calculated.grocerySpend)}
                  note="মেম্বারদের বাজার জমা"
                  icon={WalletCards}
                />
                <MetricCard
                  label="মিল রেট"
                  value={money(calculated.mealRate)}
                  note="প্রতি মিল · বাজার ÷ মিল"
                  icon={BarChart3}
                />
                <MetricCard
                  label="ইউটিলিটি বিল"
                  value={money(calculated.utilityTotal)}
                  note={`${utilities.length} টি মোট বিল`}
                  icon={CircleDollarSign}
                />
              </section>

              {/* Smart Meal Rate & Budget Optimizer */}
              <MealRateBudgetOptimizer
                totalMeals={calculated.totalMeals}
                currentGrocery={calculated.grocerySpend}
                currentMealRate={calculated.mealRate}
                daysCount={days.length}
                selectedMonth={selectedMonth}
              />

              {/* Quick Navigation Cards Grid */}
              <section className="mt-8">
                <div className="mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    মেস ডাটা এন্ট্রি শর্টকাট (Quick Section Access)
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <button
                    onClick={() => setActiveNav("মিল ক্যালেন্ডার")}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-md group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                          <Utensils size={20} />
                        </span>
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <h4 className="mt-4 font-semibold text-foreground">মিল ক্যালেন্ডার</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{calculated.totalMeals} টি মাসিক মিল এন্ট্রি করা হয়েছে</p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-primary">ক্যালেন্ডার খুলুন →</span>
                  </button>

                  <button
                    onClick={() => setActiveNav("বাজার খরচ")}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-md group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                          <Receipt size={20} />
                        </span>
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <h4 className="mt-4 font-semibold text-foreground">মেম্বারদের বাজার জমা</h4>
                      <p className="mt-1 text-xs text-muted-foreground">মোট জমা: {money(calculated.grocerySpend)}</p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-primary">বাজার এন্ট্রি করুন →</span>
                  </button>

                  <button
                    onClick={() => setActiveNav("ইউটিলিটি ও বিল")}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-md group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                          <SlidersHorizontal size={20} />
                        </span>
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <h4 className="mt-4 font-semibold text-foreground">ইউটিলিটি ও বিল</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{utilities.length} টি ইউটিলিটি বিল ({money(calculated.utilityTotal)})</p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-primary">বিল ম্যানেজ করুন →</span>
                  </button>

                  <button
                    onClick={() => setActiveNav("মেম্বারবৃন্দ")}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-md group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                          <Users size={20} />
                        </span>
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition" />
                      </div>
                      <h4 className="mt-4 font-semibold text-foreground">মেম্বার ও বাসা ভাড়া</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{members.length} জন সক্রিয় মেম্বার</p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-primary">মেম্বার সেটআপ →</span>
                  </button>
                </div>
              </section>

              {/* Grand Monthly Settlement Summary Section */}
              <section className="mt-8">
                <SectionTitle
                  icon={CircleDollarSign}
                  eyebrow="সর্বমোট চূড়ান্ত হিসাব"
                  title="গ্র্যান্ড মান্থলি সেটেলমেন্ট সামারি"
                  action={
                    <button
                      onClick={exportXlsx}
                      className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
                    >
                      <ArrowDownToLine size={16} />
                      রিপোর্ট ডাউনলোড
                    </button>
                  }
                />
                <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm sm:min-w-[1150px]">
                      <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-4 py-3 font-medium">মেম্বার</th>
                          <th className="px-4 py-3 text-right font-medium">মোট মিল</th>
                          <th className="px-4 py-3 text-right font-medium">মিল রেট</th>
                          <th className="px-4 py-3 text-right font-medium">বাজার/মিল জমা</th>
                          <th className="px-4 py-3 text-right font-medium">মোট মিল খরচ</th>
                          <th className="px-4 py-3 text-right font-medium">মিল নিট স্থিতি</th>
                          <th className="px-4 py-3 text-right font-medium">ইউটিলিটি শেয়ার</th>
                          <th className="px-4 py-3 text-right font-medium">বাসা ভাড়া</th>
                          <th className="px-4 py-3 text-right font-medium">সর্বমোট চূড়ান্ত পাওনা/দেওয়া</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {calculated.grandSettlements.map((row) => (
                          <tr key={row.id} className="hover:bg-muted/30">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <span className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${row.color}`}>{row.initials}</span>
                                <span className="font-semibold">{row.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-right font-medium">{row.meals} টি</td>
                            <td className="px-4 py-3 text-right font-medium">{money(row.mealRate)}</td>
                            <td className="px-4 py-3 text-right font-medium text-emerald-600 dark:text-emerald-400">{money(row.groceries)}</td>
                            <td className="px-4 py-3 text-right font-medium text-rose-600 dark:text-rose-400">{money(row.mealCost)}</td>
                            <td className="px-4 py-3 text-right">
                              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${row.mealNet > 0 ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : row.mealNet < 0 ? "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300" : "bg-muted text-muted-foreground"}`}>
                                {row.mealNet > 0 ? `পাবেন +${money(row.mealNet)}` : row.mealNet < 0 ? `দিবেন -${money(Math.abs(row.mealNet))}` : "হিসাব সমান"}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right font-medium">{money(row.utilityShare)}</td>
                            <td className="px-4 py-3 text-right font-medium">{money(row.houseRent)}</td>
                            <td className="px-4 py-3 text-right">
                              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${row.grandTotalPayable > 0 ? "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300" : row.grandTotalPayable < 0 ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-muted text-muted-foreground"}`}>
                                {row.grandTotalPayable > 0 ? `মোট দিবেন ${money(row.grandTotalPayable)}` : row.grandTotalPayable < 0 ? `মোট পাবেন ${money(Math.abs(row.grandTotalPayable))}` : "হিসাব সমান"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="border-t-2 border-border bg-muted/60 font-semibold">
                        <tr>
                          <td className="px-4 py-3.5 font-bold text-foreground">সর্বমোট সামারি</td>
                          <td className="px-4 py-3.5 text-right font-bold text-foreground">{calculated.totalMeals} টি</td>
                          <td className="px-4 py-3.5 text-right font-bold text-muted-foreground">—</td>
                          <td className="px-4 py-3.5 text-right font-bold text-emerald-600 dark:text-emerald-400">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.groceries, 0))}</td>
                          <td className="px-4 py-3.5 text-right font-bold text-rose-600 dark:text-rose-400">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.mealCost, 0))}</td>
                          <td className="px-4 py-3.5 text-right font-bold text-muted-foreground">—</td>
                          <td className="px-4 py-3.5 text-right font-bold text-foreground">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.utilityShare, 0))}</td>
                          <td className="px-4 py-3.5 text-right font-bold text-foreground">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.houseRent, 0))}</td>
                          <td className="px-4 py-3.5 text-right font-bold text-primary text-base">{money(calculated.grandSettlements.reduce((sum, r) => sum + (r.grandTotalPayable > 0 ? r.grandTotalPayable : 0), 0))}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-muted/40 px-5 py-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">সর্বমোট আদায়যোগ্য টাকা (Payable Sum)</p>
                      <p className="text-xl font-bold text-primary">
                        {money(calculated.grandSettlements.reduce((sum, r) => sum + (r.grandTotalPayable > 0 ? r.grandTotalPayable : 0), 0))}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                      <div>
                        <span>মোট বাজার জমা: </span>
                        <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.groceries, 0))}</strong>
                      </div>
                      <div>
                        <span>মোট মিল খরচ: </span>
                        <strong className="text-rose-600 dark:text-rose-400 font-bold">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.mealCost, 0))}</strong>
                      </div>
                      <div>
                        <span>সর্বমোট বাসা ভাড়া: </span>
                        <strong className="text-foreground font-bold">{money(calculated.grandSettlements.reduce((sum, r) => sum + r.houseRent, 0))}</strong>
                      </div>
                      <div>
                        <span>মেস থেকে মোট নেট আদায়যোগ্য: </span>
                        <strong className="text-emerald-500 font-bold">{money(calculated.grandSettlements.reduce((sum, r) => sum + (r.grandTotalPayable > 0 ? r.grandTotalPayable : 0), 0))}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* VIEW 2: MEAL CALENDAR PAGE */}
          {(activeNav === "Meals" || activeNav === "মিল ক্যালেন্ডার") && (
            <section className="space-y-6">
              <SectionTitle
                icon={Utensils}
                eyebrow="দৈনিক রেজিস্টার"
                title="মিল ক্যালেন্ডার"
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
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:min-w-[780px]">
                    <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="w-24 px-4 py-3 font-medium">তারিখ</th>
                        {members.map((member) => (
                          <th key={member.id} className="px-3 py-3 font-medium">
                            {member.name}
                          </th>
                        ))}
                        <th className="px-4 py-3 text-right font-medium">মোট মিল</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {days.map((day, index) => (
                        <tr key={`${day.date}-${day.label}`} className="transition hover:bg-muted/30">
                          <td className="px-4 py-2.5">
                            <span className="font-semibold">{day.date}</span>
                            <span className="ml-2 text-xs text-muted-foreground">{day.label}</span>
                          </td>
                          {members.map((member) => (
                            <td key={member.id} className="px-3 py-2.5">
                              <input
                                aria-label={`${member.name} meals on ${day.label} ${day.date}`}
                                type="number"
                                min="0"
                                max="3"
                                value={day.counts[member.id] ?? 0}
                                onChange={(event) => updateMeal(index, member.id, event.target.value)}
                                className="w-16 rounded-lg border border-input bg-background px-2 py-1.5 text-center font-medium outline-none ring-offset-background focus:ring-2 focus:ring-ring"
                              />
                            </td>
                          ))}
                          <td className="px-4 py-2.5 text-right font-semibold text-primary">{day.total}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="border-t-2 border-border bg-muted/60 font-semibold">
                      <tr>
                        <td className="px-4 py-3 font-bold text-foreground">মাসিক মোট মিল</td>
                        {members.map((member) => {
                          const memberTotalMeals = days.reduce((sum, day) => sum + (day.counts[member.id] ?? 0), 0);
                          return (
                            <td key={member.id} className="px-3 py-3 text-center font-bold text-primary">
                              {memberTotalMeals}
                            </td>
                          );
                        })}
                        <td className="px-4 py-3 text-right font-bold text-primary text-base">
                          {calculated.totalMeals}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs text-muted-foreground">
                  <div className="flex flex-wrap items-center gap-3">
                    <span>দৈনিক সর্বোচ্চ ৩ টি মিল গণনা।</span>
                    <span className="font-semibold text-foreground">মেম্বারওয়ারী মোট মিল:</span>
                    {members.map((member) => {
                      const total = days.reduce((sum, day) => sum + (day.counts[member.id] ?? 0), 0);
                      return (
                        <span key={member.id} className="rounded-md bg-muted px-2 py-1 text-foreground font-medium">
                          {member.name}: <strong className="text-primary">{total} টি মিল</strong>
                        </span>
                      );
                    })}
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {calculated.totalMeals} টি মোট মিল এন্ট্রি
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* VIEW 3: EXPENSES PAGE */}
          {(activeNav === "Expenses" || activeNav === "বাজার খরচ") && (
            <section className="space-y-6">
              <SectionTitle
                icon={Receipt}
                eyebrow="বাজারের এন্ট্রি"
                title="মেম্বারদের বাজার জমা ও খরচ"
                action={
                  <span className="text-xs text-muted-foreground">
                    অ্যাডভান্স জমা, দৈনিক বাজার এবং বড় বাজার এন্ট্রি করুন
                  </span>
                }
              />
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:min-w-[680px]">
                    <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">মেম্বার</th>
                        {expenseCategories.map((category) => (
                          <th key={category} className="px-4 py-3 text-right font-medium">{category}</th>
                        ))}
                        <th className="px-4 py-3 text-right font-medium">মোট জমা (E)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {members.map((member) => {
                        const memberExpenses = expenses[member.id] ?? {};
                        const totalGiven = expenseCategories.reduce((sum, category) => sum + (Number(memberExpenses[category]) || 0), 0);
                        return (
                          <tr key={member.id} className="hover:bg-muted/30">
                            <td className="px-4 py-3 font-semibold">
                              <div className="flex items-center gap-3">
                                <span className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${member.color}`}>{member.initials}</span>
                                <span>{member.name}</span>
                              </div>
                            </td>
                            {expenseCategories.map((category) => (
                              <td key={category} className="px-4 py-3 text-right">
                                <input
                                  type="number"
                                  min={0}
                                  value={memberExpenses[category] ?? 0}
                                  onChange={(event) => updateExpense(member.id, category, Number(event.target.value) || 0)}
                                  className="w-28 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                                />
                              </td>
                            ))}
                            <td className="px-4 py-3 text-right font-semibold">{money(totalGiven)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* VIEW 4: UTILITIES PAGE */}
          {(activeNav === "Utilities" || activeNav === "ইউটিলিটি ও বিল") && (
            <section className="space-y-6">
              <SectionTitle
                icon={SlidersHorizontal}
                eyebrow="শেয়ার্ড বিল"
                title="ইউটিলিটি ও শেয়ার্ড বিল"
                action={
                  <button
                    onClick={addUtility}
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Plus size={16} />
                    নতুন বিল যোগ করুন
                  </button>
                }
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-4">
                  {utilities.map((utility) => (
                    <div
                      key={utility.id}
                      className="flex items-center justify-between gap-3 border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="min-w-0 flex-1">
                        <input
                          value={utility.name}
                          onChange={(event) => updateUtility(utility.id, event.target.value, utility.amount)}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                        <p className="mt-1 text-xs text-muted-foreground">বিলের বিবরণ / নাম</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground text-sm font-medium">টাকা</span>
                        <input
                          type="number"
                          value={utility.amount}
                          onChange={(event) => updateUtility(utility.id, utility.name, Number(event.target.value) || 0)}
                          className="w-32 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring font-semibold"
                        />
                        <IconButton label={`${utility.name} বিল মুছে ফেলুন`} onClick={() => setDeleteTarget({ type: 'utility', id: utility.id, name: utility.name })}>
                          <Trash2 size={16} />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 border-t border-border pt-4 text-sm">
                    <div className="flex items-center justify-between font-bold text-base">
                      <span>সর্বমোট ইউটিলিটি বিল</span>
                      <span className="text-primary">{money(calculated.utilityTotal)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {members.length
                        ? calculated.customMemberCount > 0
                          ? `অবশিষ্ট বিল ${money(calculated.remainingUtilityBill)} মোট ${calculated.defaultMemberCount} জন মেম্বারের মাঝে ভাগ করা হয়েছে (${money(calculated.defaultUtilityShare)} প্রতিজন)`
                          : `সকল ইউটিলিটি বিল সমভাবে ${members.length} জন মেম্বারের মাঝে ভাগ করা হয়েছে (${money(calculated.defaultUtilityShare)} প্রতিজন)`
                        : 'ইউটিলিটি হিসাবের জন্য মেম্বার যুক্ত করুন।'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* VIEW 5: MEMBERS & RENT PAGE */}
          {(activeNav === "Members" || activeNav === "মেম্বারবৃন্দ") && (
            <div className="space-y-10">
              <section>
                <SectionTitle
                  icon={CircleDollarSign}
                  eyebrow="স্থায়ী খরচ"
                  title="বাসা ভাড়া ও ফিক্সড খরচ"
                  action={
                    <span className="text-xs text-muted-foreground">
                      মাসিক বাসা ভাড়া ও রুম ভাড়া
                    </span>
                  }
                />
                <div className="mt-4 rounded-2xl border border-border bg-card p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <MetricCard
                      label="সর্বমোট বাসা ভাড়া"
                      value={money(calculated.totalApartmentRent)}
                      note={`${members.length} জন সক্রিয় মেম্বার`}
                      icon={CircleDollarSign}
                    />
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm sm:min-w-[660px]">
                        <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                          <tr>
                            <th className="px-4 py-3 font-medium">মেম্বার</th>
                            <th className="px-4 py-3 text-right font-medium">বাসা ভাড়া (টাকা)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {members.map((member) => (
                            <tr key={member.id} className="hover:bg-muted/30">
                              <td className="px-4 py-3 font-semibold">
                                <div className="flex items-center gap-3">
                                  <span className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${member.color}`}>{member.initials}</span>
                                  <span>{member.name}</span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <input
                                  type="number"
                                  min={0}
                                  value={member.houseRent ?? 0}
                                  onChange={(event) => updateHouseRent(member.id, event.target.value)}
                                  className="w-36 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <SectionTitle
                  icon={Users}
                  eyebrow="মেম্বারশিপ"
                  title="মেম্বারবৃন্দ ও কাস্টম ইউটিলিটি"
                  action={
                    <button
                      onClick={addMember}
                      className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      <Plus size={16} />
                      নতুন মেম্বার যোগ করুন
                    </button>
                  }
                />
                <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm sm:min-w-[680px]">
                      <thead className="border-b border-border bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-4 py-3 font-medium">মেম্বার</th>
                          <th className="px-4 py-3 text-right font-medium">মোট মিল</th>
                          <th className="px-4 py-3 text-right font-medium">ডিফল্ট ইউটিলিটি</th>
                          <th className="px-4 py-3 text-right font-medium">কাস্টম ইউটিলিটি শেয়ার</th>
                          <th className="px-4 py-3 text-right font-medium">অ্যাকশন</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {calculated.settlements.map((row) => (
                          <tr key={row.id}>
                            <td className="px-4 py-3 font-semibold">
                              <input
                                type="text"
                                value={row.name}
                                onChange={(event) => updateMemberName(row.id, event.target.value)}
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                              />
                            </td>
                            <td className="px-4 py-3 text-right">{row.meals}</td>
                            <td className="px-4 py-3 text-right text-muted-foreground">{money(calculated.defaultUtilityShare)}</td>
                            <td className="px-4 py-3 text-right">
                              <input
                                type="number"
                                placeholder="ডিফল্ট"
                                value={overrides[row.id]?.utilities ?? ""}
                                onChange={(event) => updateOverride(row.id, event.target.value)}
                                className="w-28 rounded-lg border border-input bg-background px-3 py-2 text-right text-sm outline-none focus:ring-2 focus:ring-ring"
                              />
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button onClick={() => updateOverride(row.id, "")} className="text-xs font-medium text-muted-foreground hover:text-foreground">রিসেট</button>
                              {members.length > 1 && (
                                <button aria-label={`${row.name} মেম্বার মুছে ফেলুন`} onClick={() => setDeleteTarget({ type: 'member', id: row.id, name: row.name })} className="ml-3 text-muted-foreground hover:text-destructive">
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
            </div>
          )}

          {/* VIEW 6: SETTINGS PAGE */}
          {(activeNav === "Settings" || activeNav === "সেটিংস") && (
            <section className="mx-auto max-w-2xl space-y-6">
              <SectionTitle
                icon={Settings2}
                eyebrow="প্রোফাইল সেটআপ"
                title="মেস ও ম্যানেজার সেটিংস"
              />
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground font-medium">মেসের নাম</span>
                    <strong className="text-foreground font-bold">{messProfile?.messName ?? 'আপনার মেস'}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground font-medium">ম্যানেজারের নাম</span>
                    <strong className="text-foreground font-bold">{messProfile?.managerName ?? 'ম্যানেজার'}</strong>
                  </div>
                  <div className="pt-2">
                    <a
                      href="/settings"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      <Settings2 size={18} />
                      <span>সম্পূর্ণ সেটিংস পেজে যান (পাসওয়ার্ড ও মেস প্রোফাইল এডিট)</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground print:hidden">
            <span>
              মেসফ্লো আপনার মেসের সকল হিসাব রাখে ডিজিটাল ও স্বচ্ছ।{" "}
              <span className="text-primary">{syncStatus === "Saved to MongoDB" ? "ডাটাবেজে সংরক্ষিত" : syncStatus}</span>
            </span>
            <span>
              এইমাত্র আপডেট হয়েছে ·{" "}
              <button onClick={exportPdf} className="font-medium text-primary hover:underline">
                প্রিন্ট / পিডিএফ কপি
              </button>
            </span>
          </footer>
        </div>

      {/* 1. Add Member Modal */}
      {isAddMemberOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2.5 text-primary">
                <Users size={22} />
                <h3 className="text-lg font-bold text-foreground">নতুন মেম্বার যুক্ত করুন</h3>
              </div>
              <button
                onClick={() => setIsAddMemberOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddMemberSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  মেম্বারের নাম <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: শাকিল আহমেদ"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring font-medium"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  মাসিক বাসা ভাড়া (টাকা, ঐচ্ছিক)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="যেমন: ৩৫০০"
                  value={newMemberRent}
                  onChange={(e) => setNewMemberRent(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsAddMemberOpen(false)}
                  className="rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  বাতিল করুন
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  মেম্বার যুক্ত করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Add Utility Bill Modal */}
      {isAddUtilityOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2.5 text-primary">
                <SlidersHorizontal size={22} />
                <h3 className="text-lg font-bold text-foreground">নতুন ইউটিলিটি বিল যোগ করুন</h3>
              </div>
              <button
                onClick={() => setIsAddUtilityOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddUtilitySubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  ইউটিলিটি বিলের নাম <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: কারেন্ট বিল / গ্যাস বিল / ইন্টারনেট"
                  value={newUtilityName}
                  onChange={(e) => setNewUtilityName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring font-medium"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">
                  বিলের পরিমাণ (টাকা) <span className="text-destructive">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  placeholder="যেমন: ১৫০০"
                  value={newUtilityAmount}
                  onChange={(e) => setNewUtilityAmount(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring font-medium font-bold text-primary"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsAddUtilityOpen(false)}
                  className="rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  বাতিল করুন
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  বিল যোগ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Logout Confirmation Modal */}
      {isLogoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-4 animate-in zoom-in-95 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <LogOut size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">লগআউট নিশ্চিতকরণ</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                আপনি কি নিশ্চিত যে মেসফ্লো অ্যাকাউন্ট থেকে লগআউট করতে চান?
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsLogoutOpen(false)}
                className="flex-1 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-accent"
              >
                বাতিল করুন
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="flex-1 rounded-xl bg-destructive px-4 py-2.5 text-xs font-bold text-destructive-foreground shadow-sm hover:bg-destructive/90"
              >
                লগআউট করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Delete Item Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl space-y-4 animate-in zoom-in-95 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <Trash2 size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">মুছে ফেলা নিশ্চিত করুন</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                আপনি কি <strong className="text-foreground font-bold">"{deleteTarget.name}"</strong> ডাটাবেজ থেকে স্থায়ীভাবে মুছে ফেলতে চান?
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-accent"
              >
                বাতিল
              </button>
              <button
                onClick={confirmDeleteTarget}
                className="flex-1 rounded-xl bg-destructive px-4 py-2.5 text-xs font-bold text-destructive-foreground shadow-sm hover:bg-destructive/90"
              >
                মুছে ফেলুন
              </button>
            </div>
          </div>
        </div>
      )}

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
