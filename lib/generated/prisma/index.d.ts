
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model MealDay
 * 
 */
export type MealDay = $Result.DefaultSelection<Prisma.$MealDayPayload>
/**
 * Model MealEntry
 * 
 */
export type MealEntry = $Result.DefaultSelection<Prisma.$MealEntryPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Utility
 * 
 */
export type Utility = $Result.DefaultSelection<Prisma.$UtilityPayload>
/**
 * Model Override
 * 
 */
export type Override = $Result.DefaultSelection<Prisma.$OverridePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Households
 * const households = await prisma.household.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Households
   * const households = await prisma.household.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealDay`: Exposes CRUD operations for the **MealDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealDays
    * const mealDays = await prisma.mealDay.findMany()
    * ```
    */
  get mealDay(): Prisma.MealDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealEntry`: Exposes CRUD operations for the **MealEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealEntries
    * const mealEntries = await prisma.mealEntry.findMany()
    * ```
    */
  get mealEntry(): Prisma.MealEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utility`: Exposes CRUD operations for the **Utility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilities
    * const utilities = await prisma.utility.findMany()
    * ```
    */
  get utility(): Prisma.UtilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.override`: Exposes CRUD operations for the **Override** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Overrides
    * const overrides = await prisma.override.findMany()
    * ```
    */
  get override(): Prisma.OverrideDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Household: 'Household',
    Member: 'Member',
    MealDay: 'MealDay',
    MealEntry: 'MealEntry',
    Expense: 'Expense',
    Utility: 'Utility',
    Override: 'Override'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "household" | "member" | "mealDay" | "mealEntry" | "expense" | "utility" | "override"
      txIsolationLevel: never
    }
    model: {
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HouseholdFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HouseholdAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      MealDay: {
        payload: Prisma.$MealDayPayload<ExtArgs>
        fields: Prisma.MealDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          findFirst: {
            args: Prisma.MealDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          findMany: {
            args: Prisma.MealDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>[]
          }
          create: {
            args: Prisma.MealDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          createMany: {
            args: Prisma.MealDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MealDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          update: {
            args: Prisma.MealDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          deleteMany: {
            args: Prisma.MealDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MealDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealDayPayload>
          }
          aggregate: {
            args: Prisma.MealDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealDay>
          }
          groupBy: {
            args: Prisma.MealDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealDayGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MealDayFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MealDayAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MealDayCountArgs<ExtArgs>
            result: $Utils.Optional<MealDayCountAggregateOutputType> | number
          }
        }
      }
      MealEntry: {
        payload: Prisma.$MealEntryPayload<ExtArgs>
        fields: Prisma.MealEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          findFirst: {
            args: Prisma.MealEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          findMany: {
            args: Prisma.MealEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>[]
          }
          create: {
            args: Prisma.MealEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          createMany: {
            args: Prisma.MealEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MealEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          update: {
            args: Prisma.MealEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          deleteMany: {
            args: Prisma.MealEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MealEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEntryPayload>
          }
          aggregate: {
            args: Prisma.MealEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealEntry>
          }
          groupBy: {
            args: Prisma.MealEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealEntryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MealEntryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MealEntryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MealEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MealEntryCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExpenseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExpenseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Utility: {
        payload: Prisma.$UtilityPayload<ExtArgs>
        fields: Prisma.UtilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          findFirst: {
            args: Prisma.UtilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          findMany: {
            args: Prisma.UtilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>[]
          }
          create: {
            args: Prisma.UtilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          createMany: {
            args: Prisma.UtilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          update: {
            args: Prisma.UtilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          deleteMany: {
            args: Prisma.UtilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityPayload>
          }
          aggregate: {
            args: Prisma.UtilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtility>
          }
          groupBy: {
            args: Prisma.UtilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UtilityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UtilityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UtilityCountArgs<ExtArgs>
            result: $Utils.Optional<UtilityCountAggregateOutputType> | number
          }
        }
      }
      Override: {
        payload: Prisma.$OverridePayload<ExtArgs>
        fields: Prisma.OverrideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OverrideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OverrideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          findFirst: {
            args: Prisma.OverrideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OverrideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          findMany: {
            args: Prisma.OverrideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>[]
          }
          create: {
            args: Prisma.OverrideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          createMany: {
            args: Prisma.OverrideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OverrideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          update: {
            args: Prisma.OverrideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          deleteMany: {
            args: Prisma.OverrideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OverrideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OverrideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverridePayload>
          }
          aggregate: {
            args: Prisma.OverrideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOverride>
          }
          groupBy: {
            args: Prisma.OverrideGroupByArgs<ExtArgs>
            result: $Utils.Optional<OverrideGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OverrideFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OverrideAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OverrideCountArgs<ExtArgs>
            result: $Utils.Optional<OverrideCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    household?: HouseholdOmit
    member?: MemberOmit
    mealDay?: MealDayOmit
    mealEntry?: MealEntryOmit
    expense?: ExpenseOmit
    utility?: UtilityOmit
    override?: OverrideOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    members: number
    days: number
    expenses: number
    utilities: number
    overrides: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | HouseholdCountOutputTypeCountMembersArgs
    days?: boolean | HouseholdCountOutputTypeCountDaysArgs
    expenses?: boolean | HouseholdCountOutputTypeCountExpensesArgs
    utilities?: boolean | HouseholdCountOutputTypeCountUtilitiesArgs
    overrides?: boolean | HouseholdCountOutputTypeCountOverridesArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealDayWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountUtilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilityWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountOverridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverrideWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    meals: number
    expenses: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | MemberCountOutputTypeCountMealsArgs
    expenses?: boolean | MemberCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type MealDayCountOutputType
   */

  export type MealDayCountOutputType = {
    entries: number
  }

  export type MealDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | MealDayCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * MealDayCountOutputType without action
   */
  export type MealDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDayCountOutputType
     */
    select?: MealDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealDayCountOutputType without action
   */
  export type MealDayCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: string | null
    name: string | null
    monthKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: string | null
    name: string | null
    monthKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    name: number
    monthKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseholdMinAggregateInputType = {
    id?: true
    name?: true
    monthKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    name?: true
    monthKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    name?: true
    monthKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: string
    name: string
    monthKey: string
    createdAt: Date
    updatedAt: Date
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    monthKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Household$membersArgs<ExtArgs>
    days?: boolean | Household$daysArgs<ExtArgs>
    expenses?: boolean | Household$expensesArgs<ExtArgs>
    utilities?: boolean | Household$utilitiesArgs<ExtArgs>
    overrides?: boolean | Household$overridesArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>



  export type HouseholdSelectScalar = {
    id?: boolean
    name?: boolean
    monthKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "monthKey" | "createdAt" | "updatedAt", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Household$membersArgs<ExtArgs>
    days?: boolean | Household$daysArgs<ExtArgs>
    expenses?: boolean | Household$expensesArgs<ExtArgs>
    utilities?: boolean | Household$utilitiesArgs<ExtArgs>
    overrides?: boolean | Household$overridesArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      days: Prisma.$MealDayPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      utilities: Prisma.$UtilityPayload<ExtArgs>[]
      overrides: Prisma.$OverridePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      monthKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * @param {HouseholdFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const household = await prisma.household.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HouseholdFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Household.
     * @param {HouseholdAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const household = await prisma.household.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HouseholdAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Household$membersArgs<ExtArgs> = {}>(args?: Subset<T, Household$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    days<T extends Household$daysArgs<ExtArgs> = {}>(args?: Subset<T, Household$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Household$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Household$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilities<T extends Household$utilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Household$utilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overrides<T extends Household$overridesArgs<ExtArgs> = {}>(args?: Subset<T, Household$overridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'String'>
    readonly name: FieldRef<"Household", 'String'>
    readonly monthKey: FieldRef<"Household", 'String'>
    readonly createdAt: FieldRef<"Household", 'DateTime'>
    readonly updatedAt: FieldRef<"Household", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household findRaw
   */
  export type HouseholdFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Household aggregateRaw
   */
  export type HouseholdAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Household.members
   */
  export type Household$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Household.days
   */
  export type Household$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    where?: MealDayWhereInput
    orderBy?: MealDayOrderByWithRelationInput | MealDayOrderByWithRelationInput[]
    cursor?: MealDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealDayScalarFieldEnum | MealDayScalarFieldEnum[]
  }

  /**
   * Household.expenses
   */
  export type Household$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Household.utilities
   */
  export type Household$utilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    where?: UtilityWhereInput
    orderBy?: UtilityOrderByWithRelationInput | UtilityOrderByWithRelationInput[]
    cursor?: UtilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilityScalarFieldEnum | UtilityScalarFieldEnum[]
  }

  /**
   * Household.overrides
   */
  export type Household$overridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    where?: OverrideWhereInput
    orderBy?: OverrideOrderByWithRelationInput | OverrideOrderByWithRelationInput[]
    cursor?: OverrideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OverrideScalarFieldEnum | OverrideScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    householdId: string | null
    externalId: string | null
    name: string | null
    initials: string | null
    color: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    householdId: string | null
    externalId: string | null
    name: string | null
    initials: string | null
    color: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    householdId: number
    externalId: number
    name: number
    initials: number
    color: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    initials?: true
    color?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    initials?: true
    color?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    initials?: true
    color?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    householdId?: boolean
    externalId?: boolean
    name?: boolean
    initials?: boolean
    color?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    meals?: boolean | Member$mealsArgs<ExtArgs>
    expenses?: boolean | Member$expensesArgs<ExtArgs>
    override?: boolean | Member$overrideArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    householdId?: boolean
    externalId?: boolean
    name?: boolean
    initials?: boolean
    color?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "householdId" | "externalId" | "name" | "initials" | "color", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    meals?: boolean | Member$mealsArgs<ExtArgs>
    expenses?: boolean | Member$expensesArgs<ExtArgs>
    override?: boolean | Member$overrideArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      meals: Prisma.$MealEntryPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      override: Prisma.$OverridePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      householdId: string
      externalId: string
      name: string
      initials: string
      color: string
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * @param {MemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const member = await prisma.member.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Member.
     * @param {MemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const member = await prisma.member.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meals<T extends Member$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Member$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Member$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Member$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    override<T extends Member$overrideArgs<ExtArgs> = {}>(args?: Subset<T, Member$overrideArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly householdId: FieldRef<"Member", 'String'>
    readonly externalId: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly initials: FieldRef<"Member", 'String'>
    readonly color: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member findRaw
   */
  export type MemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Member aggregateRaw
   */
  export type MemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Member.meals
   */
  export type Member$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    cursor?: MealEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * Member.expenses
   */
  export type Member$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Member.override
   */
  export type Member$overrideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    where?: OverrideWhereInput
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model MealDay
   */

  export type AggregateMealDay = {
    _count: MealDayCountAggregateOutputType | null
    _min: MealDayMinAggregateOutputType | null
    _max: MealDayMaxAggregateOutputType | null
  }

  export type MealDayMinAggregateOutputType = {
    id: string | null
    householdId: string | null
    date: string | null
    label: string | null
  }

  export type MealDayMaxAggregateOutputType = {
    id: string | null
    householdId: string | null
    date: string | null
    label: string | null
  }

  export type MealDayCountAggregateOutputType = {
    id: number
    householdId: number
    date: number
    label: number
    _all: number
  }


  export type MealDayMinAggregateInputType = {
    id?: true
    householdId?: true
    date?: true
    label?: true
  }

  export type MealDayMaxAggregateInputType = {
    id?: true
    householdId?: true
    date?: true
    label?: true
  }

  export type MealDayCountAggregateInputType = {
    id?: true
    householdId?: true
    date?: true
    label?: true
    _all?: true
  }

  export type MealDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealDay to aggregate.
     */
    where?: MealDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealDays to fetch.
     */
    orderBy?: MealDayOrderByWithRelationInput | MealDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealDays
    **/
    _count?: true | MealDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealDayMaxAggregateInputType
  }

  export type GetMealDayAggregateType<T extends MealDayAggregateArgs> = {
        [P in keyof T & keyof AggregateMealDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealDay[P]>
      : GetScalarType<T[P], AggregateMealDay[P]>
  }




  export type MealDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealDayWhereInput
    orderBy?: MealDayOrderByWithAggregationInput | MealDayOrderByWithAggregationInput[]
    by: MealDayScalarFieldEnum[] | MealDayScalarFieldEnum
    having?: MealDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealDayCountAggregateInputType | true
    _min?: MealDayMinAggregateInputType
    _max?: MealDayMaxAggregateInputType
  }

  export type MealDayGroupByOutputType = {
    id: string
    householdId: string
    date: string
    label: string
    _count: MealDayCountAggregateOutputType | null
    _min: MealDayMinAggregateOutputType | null
    _max: MealDayMaxAggregateOutputType | null
  }

  type GetMealDayGroupByPayload<T extends MealDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealDayGroupByOutputType[P]>
            : GetScalarType<T[P], MealDayGroupByOutputType[P]>
        }
      >
    >


  export type MealDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    householdId?: boolean
    date?: boolean
    label?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    entries?: boolean | MealDay$entriesArgs<ExtArgs>
    _count?: boolean | MealDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealDay"]>



  export type MealDaySelectScalar = {
    id?: boolean
    householdId?: boolean
    date?: boolean
    label?: boolean
  }

  export type MealDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "householdId" | "date" | "label", ExtArgs["result"]["mealDay"]>
  export type MealDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    entries?: boolean | MealDay$entriesArgs<ExtArgs>
    _count?: boolean | MealDayCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MealDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealDay"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      entries: Prisma.$MealEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      householdId: string
      date: string
      label: string
    }, ExtArgs["result"]["mealDay"]>
    composites: {}
  }

  type MealDayGetPayload<S extends boolean | null | undefined | MealDayDefaultArgs> = $Result.GetResult<Prisma.$MealDayPayload, S>

  type MealDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealDayCountAggregateInputType | true
    }

  export interface MealDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealDay'], meta: { name: 'MealDay' } }
    /**
     * Find zero or one MealDay that matches the filter.
     * @param {MealDayFindUniqueArgs} args - Arguments to find a MealDay
     * @example
     * // Get one MealDay
     * const mealDay = await prisma.mealDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealDayFindUniqueArgs>(args: SelectSubset<T, MealDayFindUniqueArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealDayFindUniqueOrThrowArgs} args - Arguments to find a MealDay
     * @example
     * // Get one MealDay
     * const mealDay = await prisma.mealDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealDayFindUniqueOrThrowArgs>(args: SelectSubset<T, MealDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayFindFirstArgs} args - Arguments to find a MealDay
     * @example
     * // Get one MealDay
     * const mealDay = await prisma.mealDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealDayFindFirstArgs>(args?: SelectSubset<T, MealDayFindFirstArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayFindFirstOrThrowArgs} args - Arguments to find a MealDay
     * @example
     * // Get one MealDay
     * const mealDay = await prisma.mealDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealDayFindFirstOrThrowArgs>(args?: SelectSubset<T, MealDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealDays
     * const mealDays = await prisma.mealDay.findMany()
     * 
     * // Get first 10 MealDays
     * const mealDays = await prisma.mealDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealDayWithIdOnly = await prisma.mealDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealDayFindManyArgs>(args?: SelectSubset<T, MealDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealDay.
     * @param {MealDayCreateArgs} args - Arguments to create a MealDay.
     * @example
     * // Create one MealDay
     * const MealDay = await prisma.mealDay.create({
     *   data: {
     *     // ... data to create a MealDay
     *   }
     * })
     * 
     */
    create<T extends MealDayCreateArgs>(args: SelectSubset<T, MealDayCreateArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealDays.
     * @param {MealDayCreateManyArgs} args - Arguments to create many MealDays.
     * @example
     * // Create many MealDays
     * const mealDay = await prisma.mealDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealDayCreateManyArgs>(args?: SelectSubset<T, MealDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MealDay.
     * @param {MealDayDeleteArgs} args - Arguments to delete one MealDay.
     * @example
     * // Delete one MealDay
     * const MealDay = await prisma.mealDay.delete({
     *   where: {
     *     // ... filter to delete one MealDay
     *   }
     * })
     * 
     */
    delete<T extends MealDayDeleteArgs>(args: SelectSubset<T, MealDayDeleteArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealDay.
     * @param {MealDayUpdateArgs} args - Arguments to update one MealDay.
     * @example
     * // Update one MealDay
     * const mealDay = await prisma.mealDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealDayUpdateArgs>(args: SelectSubset<T, MealDayUpdateArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealDays.
     * @param {MealDayDeleteManyArgs} args - Arguments to filter MealDays to delete.
     * @example
     * // Delete a few MealDays
     * const { count } = await prisma.mealDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDayDeleteManyArgs>(args?: SelectSubset<T, MealDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealDays
     * const mealDay = await prisma.mealDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealDayUpdateManyArgs>(args: SelectSubset<T, MealDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MealDay.
     * @param {MealDayUpsertArgs} args - Arguments to update or create a MealDay.
     * @example
     * // Update or create a MealDay
     * const mealDay = await prisma.mealDay.upsert({
     *   create: {
     *     // ... data to create a MealDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealDay we want to update
     *   }
     * })
     */
    upsert<T extends MealDayUpsertArgs>(args: SelectSubset<T, MealDayUpsertArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealDays that matches the filter.
     * @param {MealDayFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mealDay = await prisma.mealDay.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MealDayFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MealDay.
     * @param {MealDayAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mealDay = await prisma.mealDay.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MealDayAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MealDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayCountArgs} args - Arguments to filter MealDays to count.
     * @example
     * // Count the number of MealDays
     * const count = await prisma.mealDay.count({
     *   where: {
     *     // ... the filter for the MealDays we want to count
     *   }
     * })
    **/
    count<T extends MealDayCountArgs>(
      args?: Subset<T, MealDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealDayAggregateArgs>(args: Subset<T, MealDayAggregateArgs>): Prisma.PrismaPromise<GetMealDayAggregateType<T>>

    /**
     * Group by MealDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealDayGroupByArgs['orderBy'] }
        : { orderBy?: MealDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealDay model
   */
  readonly fields: MealDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entries<T extends MealDay$entriesArgs<ExtArgs> = {}>(args?: Subset<T, MealDay$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealDay model
   */
  interface MealDayFieldRefs {
    readonly id: FieldRef<"MealDay", 'String'>
    readonly householdId: FieldRef<"MealDay", 'String'>
    readonly date: FieldRef<"MealDay", 'String'>
    readonly label: FieldRef<"MealDay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealDay findUnique
   */
  export type MealDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter, which MealDay to fetch.
     */
    where: MealDayWhereUniqueInput
  }

  /**
   * MealDay findUniqueOrThrow
   */
  export type MealDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter, which MealDay to fetch.
     */
    where: MealDayWhereUniqueInput
  }

  /**
   * MealDay findFirst
   */
  export type MealDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter, which MealDay to fetch.
     */
    where?: MealDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealDays to fetch.
     */
    orderBy?: MealDayOrderByWithRelationInput | MealDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealDays.
     */
    cursor?: MealDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealDays.
     */
    distinct?: MealDayScalarFieldEnum | MealDayScalarFieldEnum[]
  }

  /**
   * MealDay findFirstOrThrow
   */
  export type MealDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter, which MealDay to fetch.
     */
    where?: MealDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealDays to fetch.
     */
    orderBy?: MealDayOrderByWithRelationInput | MealDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealDays.
     */
    cursor?: MealDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealDays.
     */
    distinct?: MealDayScalarFieldEnum | MealDayScalarFieldEnum[]
  }

  /**
   * MealDay findMany
   */
  export type MealDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter, which MealDays to fetch.
     */
    where?: MealDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealDays to fetch.
     */
    orderBy?: MealDayOrderByWithRelationInput | MealDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealDays.
     */
    cursor?: MealDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealDays.
     */
    skip?: number
    distinct?: MealDayScalarFieldEnum | MealDayScalarFieldEnum[]
  }

  /**
   * MealDay create
   */
  export type MealDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * The data needed to create a MealDay.
     */
    data: XOR<MealDayCreateInput, MealDayUncheckedCreateInput>
  }

  /**
   * MealDay createMany
   */
  export type MealDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealDays.
     */
    data: MealDayCreateManyInput | MealDayCreateManyInput[]
  }

  /**
   * MealDay update
   */
  export type MealDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * The data needed to update a MealDay.
     */
    data: XOR<MealDayUpdateInput, MealDayUncheckedUpdateInput>
    /**
     * Choose, which MealDay to update.
     */
    where: MealDayWhereUniqueInput
  }

  /**
   * MealDay updateMany
   */
  export type MealDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealDays.
     */
    data: XOR<MealDayUpdateManyMutationInput, MealDayUncheckedUpdateManyInput>
    /**
     * Filter which MealDays to update
     */
    where?: MealDayWhereInput
    /**
     * Limit how many MealDays to update.
     */
    limit?: number
  }

  /**
   * MealDay upsert
   */
  export type MealDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * The filter to search for the MealDay to update in case it exists.
     */
    where: MealDayWhereUniqueInput
    /**
     * In case the MealDay found by the `where` argument doesn't exist, create a new MealDay with this data.
     */
    create: XOR<MealDayCreateInput, MealDayUncheckedCreateInput>
    /**
     * In case the MealDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealDayUpdateInput, MealDayUncheckedUpdateInput>
  }

  /**
   * MealDay delete
   */
  export type MealDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
    /**
     * Filter which MealDay to delete.
     */
    where: MealDayWhereUniqueInput
  }

  /**
   * MealDay deleteMany
   */
  export type MealDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealDays to delete
     */
    where?: MealDayWhereInput
    /**
     * Limit how many MealDays to delete.
     */
    limit?: number
  }

  /**
   * MealDay findRaw
   */
  export type MealDayFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MealDay aggregateRaw
   */
  export type MealDayAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MealDay.entries
   */
  export type MealDay$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    cursor?: MealEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealDay without action
   */
  export type MealDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealDay
     */
    select?: MealDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealDay
     */
    omit?: MealDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealDayInclude<ExtArgs> | null
  }


  /**
   * Model MealEntry
   */

  export type AggregateMealEntry = {
    _count: MealEntryCountAggregateOutputType | null
    _avg: MealEntryAvgAggregateOutputType | null
    _sum: MealEntrySumAggregateOutputType | null
    _min: MealEntryMinAggregateOutputType | null
    _max: MealEntryMaxAggregateOutputType | null
  }

  export type MealEntryAvgAggregateOutputType = {
    count: number | null
  }

  export type MealEntrySumAggregateOutputType = {
    count: number | null
  }

  export type MealEntryMinAggregateOutputType = {
    id: string | null
    dayId: string | null
    memberId: string | null
    count: number | null
  }

  export type MealEntryMaxAggregateOutputType = {
    id: string | null
    dayId: string | null
    memberId: string | null
    count: number | null
  }

  export type MealEntryCountAggregateOutputType = {
    id: number
    dayId: number
    memberId: number
    count: number
    _all: number
  }


  export type MealEntryAvgAggregateInputType = {
    count?: true
  }

  export type MealEntrySumAggregateInputType = {
    count?: true
  }

  export type MealEntryMinAggregateInputType = {
    id?: true
    dayId?: true
    memberId?: true
    count?: true
  }

  export type MealEntryMaxAggregateInputType = {
    id?: true
    dayId?: true
    memberId?: true
    count?: true
  }

  export type MealEntryCountAggregateInputType = {
    id?: true
    dayId?: true
    memberId?: true
    count?: true
    _all?: true
  }

  export type MealEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntry to aggregate.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealEntries
    **/
    _count?: true | MealEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealEntryMaxAggregateInputType
  }

  export type GetMealEntryAggregateType<T extends MealEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMealEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealEntry[P]>
      : GetScalarType<T[P], AggregateMealEntry[P]>
  }




  export type MealEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEntryWhereInput
    orderBy?: MealEntryOrderByWithAggregationInput | MealEntryOrderByWithAggregationInput[]
    by: MealEntryScalarFieldEnum[] | MealEntryScalarFieldEnum
    having?: MealEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealEntryCountAggregateInputType | true
    _avg?: MealEntryAvgAggregateInputType
    _sum?: MealEntrySumAggregateInputType
    _min?: MealEntryMinAggregateInputType
    _max?: MealEntryMaxAggregateInputType
  }

  export type MealEntryGroupByOutputType = {
    id: string
    dayId: string
    memberId: string
    count: number
    _count: MealEntryCountAggregateOutputType | null
    _avg: MealEntryAvgAggregateOutputType | null
    _sum: MealEntrySumAggregateOutputType | null
    _min: MealEntryMinAggregateOutputType | null
    _max: MealEntryMaxAggregateOutputType | null
  }

  type GetMealEntryGroupByPayload<T extends MealEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MealEntryGroupByOutputType[P]>
        }
      >
    >


  export type MealEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    memberId?: boolean
    count?: boolean
    day?: boolean | MealDayDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEntry"]>



  export type MealEntrySelectScalar = {
    id?: boolean
    dayId?: boolean
    memberId?: boolean
    count?: boolean
  }

  export type MealEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayId" | "memberId" | "count", ExtArgs["result"]["mealEntry"]>
  export type MealEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | MealDayDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $MealEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealEntry"
    objects: {
      day: Prisma.$MealDayPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayId: string
      memberId: string
      count: number
    }, ExtArgs["result"]["mealEntry"]>
    composites: {}
  }

  type MealEntryGetPayload<S extends boolean | null | undefined | MealEntryDefaultArgs> = $Result.GetResult<Prisma.$MealEntryPayload, S>

  type MealEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealEntryCountAggregateInputType | true
    }

  export interface MealEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealEntry'], meta: { name: 'MealEntry' } }
    /**
     * Find zero or one MealEntry that matches the filter.
     * @param {MealEntryFindUniqueArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealEntryFindUniqueArgs>(args: SelectSubset<T, MealEntryFindUniqueArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealEntryFindUniqueOrThrowArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MealEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindFirstArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealEntryFindFirstArgs>(args?: SelectSubset<T, MealEntryFindFirstArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindFirstOrThrowArgs} args - Arguments to find a MealEntry
     * @example
     * // Get one MealEntry
     * const mealEntry = await prisma.mealEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MealEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealEntries
     * const mealEntries = await prisma.mealEntry.findMany()
     * 
     * // Get first 10 MealEntries
     * const mealEntries = await prisma.mealEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealEntryWithIdOnly = await prisma.mealEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealEntryFindManyArgs>(args?: SelectSubset<T, MealEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealEntry.
     * @param {MealEntryCreateArgs} args - Arguments to create a MealEntry.
     * @example
     * // Create one MealEntry
     * const MealEntry = await prisma.mealEntry.create({
     *   data: {
     *     // ... data to create a MealEntry
     *   }
     * })
     * 
     */
    create<T extends MealEntryCreateArgs>(args: SelectSubset<T, MealEntryCreateArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealEntries.
     * @param {MealEntryCreateManyArgs} args - Arguments to create many MealEntries.
     * @example
     * // Create many MealEntries
     * const mealEntry = await prisma.mealEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealEntryCreateManyArgs>(args?: SelectSubset<T, MealEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MealEntry.
     * @param {MealEntryDeleteArgs} args - Arguments to delete one MealEntry.
     * @example
     * // Delete one MealEntry
     * const MealEntry = await prisma.mealEntry.delete({
     *   where: {
     *     // ... filter to delete one MealEntry
     *   }
     * })
     * 
     */
    delete<T extends MealEntryDeleteArgs>(args: SelectSubset<T, MealEntryDeleteArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealEntry.
     * @param {MealEntryUpdateArgs} args - Arguments to update one MealEntry.
     * @example
     * // Update one MealEntry
     * const mealEntry = await prisma.mealEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealEntryUpdateArgs>(args: SelectSubset<T, MealEntryUpdateArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealEntries.
     * @param {MealEntryDeleteManyArgs} args - Arguments to filter MealEntries to delete.
     * @example
     * // Delete a few MealEntries
     * const { count } = await prisma.mealEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealEntryDeleteManyArgs>(args?: SelectSubset<T, MealEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealEntries
     * const mealEntry = await prisma.mealEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealEntryUpdateManyArgs>(args: SelectSubset<T, MealEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MealEntry.
     * @param {MealEntryUpsertArgs} args - Arguments to update or create a MealEntry.
     * @example
     * // Update or create a MealEntry
     * const mealEntry = await prisma.mealEntry.upsert({
     *   create: {
     *     // ... data to create a MealEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealEntry we want to update
     *   }
     * })
     */
    upsert<T extends MealEntryUpsertArgs>(args: SelectSubset<T, MealEntryUpsertArgs<ExtArgs>>): Prisma__MealEntryClient<$Result.GetResult<Prisma.$MealEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealEntries that matches the filter.
     * @param {MealEntryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mealEntry = await prisma.mealEntry.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MealEntryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MealEntry.
     * @param {MealEntryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mealEntry = await prisma.mealEntry.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MealEntryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MealEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryCountArgs} args - Arguments to filter MealEntries to count.
     * @example
     * // Count the number of MealEntries
     * const count = await prisma.mealEntry.count({
     *   where: {
     *     // ... the filter for the MealEntries we want to count
     *   }
     * })
    **/
    count<T extends MealEntryCountArgs>(
      args?: Subset<T, MealEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealEntryAggregateArgs>(args: Subset<T, MealEntryAggregateArgs>): Prisma.PrismaPromise<GetMealEntryAggregateType<T>>

    /**
     * Group by MealEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealEntryGroupByArgs['orderBy'] }
        : { orderBy?: MealEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealEntry model
   */
  readonly fields: MealEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    day<T extends MealDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDayDefaultArgs<ExtArgs>>): Prisma__MealDayClient<$Result.GetResult<Prisma.$MealDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealEntry model
   */
  interface MealEntryFieldRefs {
    readonly id: FieldRef<"MealEntry", 'String'>
    readonly dayId: FieldRef<"MealEntry", 'String'>
    readonly memberId: FieldRef<"MealEntry", 'String'>
    readonly count: FieldRef<"MealEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MealEntry findUnique
   */
  export type MealEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry findUniqueOrThrow
   */
  export type MealEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry findFirst
   */
  export type MealEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntries.
     */
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry findFirstOrThrow
   */
  export type MealEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntry to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEntries.
     */
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry findMany
   */
  export type MealEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter, which MealEntries to fetch.
     */
    where?: MealEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEntries to fetch.
     */
    orderBy?: MealEntryOrderByWithRelationInput | MealEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealEntries.
     */
    cursor?: MealEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEntries.
     */
    skip?: number
    distinct?: MealEntryScalarFieldEnum | MealEntryScalarFieldEnum[]
  }

  /**
   * MealEntry create
   */
  export type MealEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MealEntry.
     */
    data: XOR<MealEntryCreateInput, MealEntryUncheckedCreateInput>
  }

  /**
   * MealEntry createMany
   */
  export type MealEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealEntries.
     */
    data: MealEntryCreateManyInput | MealEntryCreateManyInput[]
  }

  /**
   * MealEntry update
   */
  export type MealEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MealEntry.
     */
    data: XOR<MealEntryUpdateInput, MealEntryUncheckedUpdateInput>
    /**
     * Choose, which MealEntry to update.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry updateMany
   */
  export type MealEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealEntries.
     */
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyInput>
    /**
     * Filter which MealEntries to update
     */
    where?: MealEntryWhereInput
    /**
     * Limit how many MealEntries to update.
     */
    limit?: number
  }

  /**
   * MealEntry upsert
   */
  export type MealEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MealEntry to update in case it exists.
     */
    where: MealEntryWhereUniqueInput
    /**
     * In case the MealEntry found by the `where` argument doesn't exist, create a new MealEntry with this data.
     */
    create: XOR<MealEntryCreateInput, MealEntryUncheckedCreateInput>
    /**
     * In case the MealEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealEntryUpdateInput, MealEntryUncheckedUpdateInput>
  }

  /**
   * MealEntry delete
   */
  export type MealEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
    /**
     * Filter which MealEntry to delete.
     */
    where: MealEntryWhereUniqueInput
  }

  /**
   * MealEntry deleteMany
   */
  export type MealEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEntries to delete
     */
    where?: MealEntryWhereInput
    /**
     * Limit how many MealEntries to delete.
     */
    limit?: number
  }

  /**
   * MealEntry findRaw
   */
  export type MealEntryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MealEntry aggregateRaw
   */
  export type MealEntryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MealEntry without action
   */
  export type MealEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEntry
     */
    select?: MealEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEntry
     */
    omit?: MealEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEntryInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    householdId: string | null
    memberId: string | null
    category: string | null
    amount: number | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    householdId: string | null
    memberId: string | null
    category: string | null
    amount: number | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    householdId: number
    memberId: number
    category: number
    amount: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    category?: true
    amount?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    category?: true
    amount?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    category?: true
    amount?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    householdId: string
    memberId: string
    category: string
    amount: number
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    householdId?: boolean
    memberId?: boolean
    category?: boolean
    amount?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>



  export type ExpenseSelectScalar = {
    id?: boolean
    householdId?: boolean
    memberId?: boolean
    category?: boolean
    amount?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "householdId" | "memberId" | "category" | "amount", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      householdId: string
      memberId: string
      category: string
      amount: number
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * @param {ExpenseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const expense = await prisma.expense.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExpenseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Expense.
     * @param {ExpenseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const expense = await prisma.expense.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExpenseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly householdId: FieldRef<"Expense", 'String'>
    readonly memberId: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense findRaw
   */
  export type ExpenseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expense aggregateRaw
   */
  export type ExpenseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Utility
   */

  export type AggregateUtility = {
    _count: UtilityCountAggregateOutputType | null
    _avg: UtilityAvgAggregateOutputType | null
    _sum: UtilitySumAggregateOutputType | null
    _min: UtilityMinAggregateOutputType | null
    _max: UtilityMaxAggregateOutputType | null
  }

  export type UtilityAvgAggregateOutputType = {
    amount: number | null
  }

  export type UtilitySumAggregateOutputType = {
    amount: number | null
  }

  export type UtilityMinAggregateOutputType = {
    id: string | null
    householdId: string | null
    externalId: string | null
    name: string | null
    amount: number | null
  }

  export type UtilityMaxAggregateOutputType = {
    id: string | null
    householdId: string | null
    externalId: string | null
    name: string | null
    amount: number | null
  }

  export type UtilityCountAggregateOutputType = {
    id: number
    householdId: number
    externalId: number
    name: number
    amount: number
    _all: number
  }


  export type UtilityAvgAggregateInputType = {
    amount?: true
  }

  export type UtilitySumAggregateInputType = {
    amount?: true
  }

  export type UtilityMinAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    amount?: true
  }

  export type UtilityMaxAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    amount?: true
  }

  export type UtilityCountAggregateInputType = {
    id?: true
    householdId?: true
    externalId?: true
    name?: true
    amount?: true
    _all?: true
  }

  export type UtilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utility to aggregate.
     */
    where?: UtilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilities to fetch.
     */
    orderBy?: UtilityOrderByWithRelationInput | UtilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilities
    **/
    _count?: true | UtilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilityMaxAggregateInputType
  }

  export type GetUtilityAggregateType<T extends UtilityAggregateArgs> = {
        [P in keyof T & keyof AggregateUtility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtility[P]>
      : GetScalarType<T[P], AggregateUtility[P]>
  }




  export type UtilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilityWhereInput
    orderBy?: UtilityOrderByWithAggregationInput | UtilityOrderByWithAggregationInput[]
    by: UtilityScalarFieldEnum[] | UtilityScalarFieldEnum
    having?: UtilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilityCountAggregateInputType | true
    _avg?: UtilityAvgAggregateInputType
    _sum?: UtilitySumAggregateInputType
    _min?: UtilityMinAggregateInputType
    _max?: UtilityMaxAggregateInputType
  }

  export type UtilityGroupByOutputType = {
    id: string
    householdId: string
    externalId: string
    name: string
    amount: number
    _count: UtilityCountAggregateOutputType | null
    _avg: UtilityAvgAggregateOutputType | null
    _sum: UtilitySumAggregateOutputType | null
    _min: UtilityMinAggregateOutputType | null
    _max: UtilityMaxAggregateOutputType | null
  }

  type GetUtilityGroupByPayload<T extends UtilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilityGroupByOutputType[P]>
            : GetScalarType<T[P], UtilityGroupByOutputType[P]>
        }
      >
    >


  export type UtilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    householdId?: boolean
    externalId?: boolean
    name?: boolean
    amount?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utility"]>



  export type UtilitySelectScalar = {
    id?: boolean
    householdId?: boolean
    externalId?: boolean
    name?: boolean
    amount?: boolean
  }

  export type UtilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "householdId" | "externalId" | "name" | "amount", ExtArgs["result"]["utility"]>
  export type UtilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }

  export type $UtilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utility"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      householdId: string
      externalId: string
      name: string
      amount: number
    }, ExtArgs["result"]["utility"]>
    composites: {}
  }

  type UtilityGetPayload<S extends boolean | null | undefined | UtilityDefaultArgs> = $Result.GetResult<Prisma.$UtilityPayload, S>

  type UtilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilityCountAggregateInputType | true
    }

  export interface UtilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utility'], meta: { name: 'Utility' } }
    /**
     * Find zero or one Utility that matches the filter.
     * @param {UtilityFindUniqueArgs} args - Arguments to find a Utility
     * @example
     * // Get one Utility
     * const utility = await prisma.utility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilityFindUniqueArgs>(args: SelectSubset<T, UtilityFindUniqueArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilityFindUniqueOrThrowArgs} args - Arguments to find a Utility
     * @example
     * // Get one Utility
     * const utility = await prisma.utility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilityFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityFindFirstArgs} args - Arguments to find a Utility
     * @example
     * // Get one Utility
     * const utility = await prisma.utility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilityFindFirstArgs>(args?: SelectSubset<T, UtilityFindFirstArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityFindFirstOrThrowArgs} args - Arguments to find a Utility
     * @example
     * // Get one Utility
     * const utility = await prisma.utility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilityFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilities
     * const utilities = await prisma.utility.findMany()
     * 
     * // Get first 10 Utilities
     * const utilities = await prisma.utility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilityWithIdOnly = await prisma.utility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilityFindManyArgs>(args?: SelectSubset<T, UtilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utility.
     * @param {UtilityCreateArgs} args - Arguments to create a Utility.
     * @example
     * // Create one Utility
     * const Utility = await prisma.utility.create({
     *   data: {
     *     // ... data to create a Utility
     *   }
     * })
     * 
     */
    create<T extends UtilityCreateArgs>(args: SelectSubset<T, UtilityCreateArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilities.
     * @param {UtilityCreateManyArgs} args - Arguments to create many Utilities.
     * @example
     * // Create many Utilities
     * const utility = await prisma.utility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilityCreateManyArgs>(args?: SelectSubset<T, UtilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utility.
     * @param {UtilityDeleteArgs} args - Arguments to delete one Utility.
     * @example
     * // Delete one Utility
     * const Utility = await prisma.utility.delete({
     *   where: {
     *     // ... filter to delete one Utility
     *   }
     * })
     * 
     */
    delete<T extends UtilityDeleteArgs>(args: SelectSubset<T, UtilityDeleteArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utility.
     * @param {UtilityUpdateArgs} args - Arguments to update one Utility.
     * @example
     * // Update one Utility
     * const utility = await prisma.utility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilityUpdateArgs>(args: SelectSubset<T, UtilityUpdateArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilities.
     * @param {UtilityDeleteManyArgs} args - Arguments to filter Utilities to delete.
     * @example
     * // Delete a few Utilities
     * const { count } = await prisma.utility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilityDeleteManyArgs>(args?: SelectSubset<T, UtilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilities
     * const utility = await prisma.utility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilityUpdateManyArgs>(args: SelectSubset<T, UtilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utility.
     * @param {UtilityUpsertArgs} args - Arguments to update or create a Utility.
     * @example
     * // Update or create a Utility
     * const utility = await prisma.utility.upsert({
     *   create: {
     *     // ... data to create a Utility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utility we want to update
     *   }
     * })
     */
    upsert<T extends UtilityUpsertArgs>(args: SelectSubset<T, UtilityUpsertArgs<ExtArgs>>): Prisma__UtilityClient<$Result.GetResult<Prisma.$UtilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilities that matches the filter.
     * @param {UtilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const utility = await prisma.utility.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UtilityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Utility.
     * @param {UtilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const utility = await prisma.utility.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UtilityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Utilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityCountArgs} args - Arguments to filter Utilities to count.
     * @example
     * // Count the number of Utilities
     * const count = await prisma.utility.count({
     *   where: {
     *     // ... the filter for the Utilities we want to count
     *   }
     * })
    **/
    count<T extends UtilityCountArgs>(
      args?: Subset<T, UtilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilityAggregateArgs>(args: Subset<T, UtilityAggregateArgs>): Prisma.PrismaPromise<GetUtilityAggregateType<T>>

    /**
     * Group by Utility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilityGroupByArgs['orderBy'] }
        : { orderBy?: UtilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utility model
   */
  readonly fields: UtilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utility model
   */
  interface UtilityFieldRefs {
    readonly id: FieldRef<"Utility", 'String'>
    readonly householdId: FieldRef<"Utility", 'String'>
    readonly externalId: FieldRef<"Utility", 'String'>
    readonly name: FieldRef<"Utility", 'String'>
    readonly amount: FieldRef<"Utility", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Utility findUnique
   */
  export type UtilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter, which Utility to fetch.
     */
    where: UtilityWhereUniqueInput
  }

  /**
   * Utility findUniqueOrThrow
   */
  export type UtilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter, which Utility to fetch.
     */
    where: UtilityWhereUniqueInput
  }

  /**
   * Utility findFirst
   */
  export type UtilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter, which Utility to fetch.
     */
    where?: UtilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilities to fetch.
     */
    orderBy?: UtilityOrderByWithRelationInput | UtilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilities.
     */
    cursor?: UtilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilities.
     */
    distinct?: UtilityScalarFieldEnum | UtilityScalarFieldEnum[]
  }

  /**
   * Utility findFirstOrThrow
   */
  export type UtilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter, which Utility to fetch.
     */
    where?: UtilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilities to fetch.
     */
    orderBy?: UtilityOrderByWithRelationInput | UtilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilities.
     */
    cursor?: UtilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilities.
     */
    distinct?: UtilityScalarFieldEnum | UtilityScalarFieldEnum[]
  }

  /**
   * Utility findMany
   */
  export type UtilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter, which Utilities to fetch.
     */
    where?: UtilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilities to fetch.
     */
    orderBy?: UtilityOrderByWithRelationInput | UtilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilities.
     */
    cursor?: UtilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilities.
     */
    skip?: number
    distinct?: UtilityScalarFieldEnum | UtilityScalarFieldEnum[]
  }

  /**
   * Utility create
   */
  export type UtilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Utility.
     */
    data: XOR<UtilityCreateInput, UtilityUncheckedCreateInput>
  }

  /**
   * Utility createMany
   */
  export type UtilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilities.
     */
    data: UtilityCreateManyInput | UtilityCreateManyInput[]
  }

  /**
   * Utility update
   */
  export type UtilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Utility.
     */
    data: XOR<UtilityUpdateInput, UtilityUncheckedUpdateInput>
    /**
     * Choose, which Utility to update.
     */
    where: UtilityWhereUniqueInput
  }

  /**
   * Utility updateMany
   */
  export type UtilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilities.
     */
    data: XOR<UtilityUpdateManyMutationInput, UtilityUncheckedUpdateManyInput>
    /**
     * Filter which Utilities to update
     */
    where?: UtilityWhereInput
    /**
     * Limit how many Utilities to update.
     */
    limit?: number
  }

  /**
   * Utility upsert
   */
  export type UtilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Utility to update in case it exists.
     */
    where: UtilityWhereUniqueInput
    /**
     * In case the Utility found by the `where` argument doesn't exist, create a new Utility with this data.
     */
    create: XOR<UtilityCreateInput, UtilityUncheckedCreateInput>
    /**
     * In case the Utility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilityUpdateInput, UtilityUncheckedUpdateInput>
  }

  /**
   * Utility delete
   */
  export type UtilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
    /**
     * Filter which Utility to delete.
     */
    where: UtilityWhereUniqueInput
  }

  /**
   * Utility deleteMany
   */
  export type UtilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilities to delete
     */
    where?: UtilityWhereInput
    /**
     * Limit how many Utilities to delete.
     */
    limit?: number
  }

  /**
   * Utility findRaw
   */
  export type UtilityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Utility aggregateRaw
   */
  export type UtilityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Utility without action
   */
  export type UtilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utility
     */
    select?: UtilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utility
     */
    omit?: UtilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityInclude<ExtArgs> | null
  }


  /**
   * Model Override
   */

  export type AggregateOverride = {
    _count: OverrideCountAggregateOutputType | null
    _avg: OverrideAvgAggregateOutputType | null
    _sum: OverrideSumAggregateOutputType | null
    _min: OverrideMinAggregateOutputType | null
    _max: OverrideMaxAggregateOutputType | null
  }

  export type OverrideAvgAggregateOutputType = {
    utilities: number | null
    mealRate: number | null
  }

  export type OverrideSumAggregateOutputType = {
    utilities: number | null
    mealRate: number | null
  }

  export type OverrideMinAggregateOutputType = {
    id: string | null
    householdId: string | null
    memberId: string | null
    utilities: number | null
    mealRate: number | null
  }

  export type OverrideMaxAggregateOutputType = {
    id: string | null
    householdId: string | null
    memberId: string | null
    utilities: number | null
    mealRate: number | null
  }

  export type OverrideCountAggregateOutputType = {
    id: number
    householdId: number
    memberId: number
    utilities: number
    mealRate: number
    _all: number
  }


  export type OverrideAvgAggregateInputType = {
    utilities?: true
    mealRate?: true
  }

  export type OverrideSumAggregateInputType = {
    utilities?: true
    mealRate?: true
  }

  export type OverrideMinAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    utilities?: true
    mealRate?: true
  }

  export type OverrideMaxAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    utilities?: true
    mealRate?: true
  }

  export type OverrideCountAggregateInputType = {
    id?: true
    householdId?: true
    memberId?: true
    utilities?: true
    mealRate?: true
    _all?: true
  }

  export type OverrideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Override to aggregate.
     */
    where?: OverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Overrides to fetch.
     */
    orderBy?: OverrideOrderByWithRelationInput | OverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Overrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Overrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Overrides
    **/
    _count?: true | OverrideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OverrideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OverrideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OverrideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OverrideMaxAggregateInputType
  }

  export type GetOverrideAggregateType<T extends OverrideAggregateArgs> = {
        [P in keyof T & keyof AggregateOverride]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverride[P]>
      : GetScalarType<T[P], AggregateOverride[P]>
  }




  export type OverrideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverrideWhereInput
    orderBy?: OverrideOrderByWithAggregationInput | OverrideOrderByWithAggregationInput[]
    by: OverrideScalarFieldEnum[] | OverrideScalarFieldEnum
    having?: OverrideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OverrideCountAggregateInputType | true
    _avg?: OverrideAvgAggregateInputType
    _sum?: OverrideSumAggregateInputType
    _min?: OverrideMinAggregateInputType
    _max?: OverrideMaxAggregateInputType
  }

  export type OverrideGroupByOutputType = {
    id: string
    householdId: string
    memberId: string
    utilities: number | null
    mealRate: number | null
    _count: OverrideCountAggregateOutputType | null
    _avg: OverrideAvgAggregateOutputType | null
    _sum: OverrideSumAggregateOutputType | null
    _min: OverrideMinAggregateOutputType | null
    _max: OverrideMaxAggregateOutputType | null
  }

  type GetOverrideGroupByPayload<T extends OverrideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OverrideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OverrideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OverrideGroupByOutputType[P]>
            : GetScalarType<T[P], OverrideGroupByOutputType[P]>
        }
      >
    >


  export type OverrideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    householdId?: boolean
    memberId?: boolean
    utilities?: boolean
    mealRate?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["override"]>



  export type OverrideSelectScalar = {
    id?: boolean
    householdId?: boolean
    memberId?: boolean
    utilities?: boolean
    mealRate?: boolean
  }

  export type OverrideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "householdId" | "memberId" | "utilities" | "mealRate", ExtArgs["result"]["override"]>
  export type OverrideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $OverridePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Override"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      householdId: string
      memberId: string
      utilities: number | null
      mealRate: number | null
    }, ExtArgs["result"]["override"]>
    composites: {}
  }

  type OverrideGetPayload<S extends boolean | null | undefined | OverrideDefaultArgs> = $Result.GetResult<Prisma.$OverridePayload, S>

  type OverrideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OverrideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OverrideCountAggregateInputType | true
    }

  export interface OverrideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Override'], meta: { name: 'Override' } }
    /**
     * Find zero or one Override that matches the filter.
     * @param {OverrideFindUniqueArgs} args - Arguments to find a Override
     * @example
     * // Get one Override
     * const override = await prisma.override.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OverrideFindUniqueArgs>(args: SelectSubset<T, OverrideFindUniqueArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Override that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OverrideFindUniqueOrThrowArgs} args - Arguments to find a Override
     * @example
     * // Get one Override
     * const override = await prisma.override.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OverrideFindUniqueOrThrowArgs>(args: SelectSubset<T, OverrideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Override that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideFindFirstArgs} args - Arguments to find a Override
     * @example
     * // Get one Override
     * const override = await prisma.override.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OverrideFindFirstArgs>(args?: SelectSubset<T, OverrideFindFirstArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Override that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideFindFirstOrThrowArgs} args - Arguments to find a Override
     * @example
     * // Get one Override
     * const override = await prisma.override.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OverrideFindFirstOrThrowArgs>(args?: SelectSubset<T, OverrideFindFirstOrThrowArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Overrides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Overrides
     * const overrides = await prisma.override.findMany()
     * 
     * // Get first 10 Overrides
     * const overrides = await prisma.override.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const overrideWithIdOnly = await prisma.override.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OverrideFindManyArgs>(args?: SelectSubset<T, OverrideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Override.
     * @param {OverrideCreateArgs} args - Arguments to create a Override.
     * @example
     * // Create one Override
     * const Override = await prisma.override.create({
     *   data: {
     *     // ... data to create a Override
     *   }
     * })
     * 
     */
    create<T extends OverrideCreateArgs>(args: SelectSubset<T, OverrideCreateArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Overrides.
     * @param {OverrideCreateManyArgs} args - Arguments to create many Overrides.
     * @example
     * // Create many Overrides
     * const override = await prisma.override.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OverrideCreateManyArgs>(args?: SelectSubset<T, OverrideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Override.
     * @param {OverrideDeleteArgs} args - Arguments to delete one Override.
     * @example
     * // Delete one Override
     * const Override = await prisma.override.delete({
     *   where: {
     *     // ... filter to delete one Override
     *   }
     * })
     * 
     */
    delete<T extends OverrideDeleteArgs>(args: SelectSubset<T, OverrideDeleteArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Override.
     * @param {OverrideUpdateArgs} args - Arguments to update one Override.
     * @example
     * // Update one Override
     * const override = await prisma.override.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OverrideUpdateArgs>(args: SelectSubset<T, OverrideUpdateArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Overrides.
     * @param {OverrideDeleteManyArgs} args - Arguments to filter Overrides to delete.
     * @example
     * // Delete a few Overrides
     * const { count } = await prisma.override.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OverrideDeleteManyArgs>(args?: SelectSubset<T, OverrideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Overrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Overrides
     * const override = await prisma.override.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OverrideUpdateManyArgs>(args: SelectSubset<T, OverrideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Override.
     * @param {OverrideUpsertArgs} args - Arguments to update or create a Override.
     * @example
     * // Update or create a Override
     * const override = await prisma.override.upsert({
     *   create: {
     *     // ... data to create a Override
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Override we want to update
     *   }
     * })
     */
    upsert<T extends OverrideUpsertArgs>(args: SelectSubset<T, OverrideUpsertArgs<ExtArgs>>): Prisma__OverrideClient<$Result.GetResult<Prisma.$OverridePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Overrides that matches the filter.
     * @param {OverrideFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const override = await prisma.override.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OverrideFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Override.
     * @param {OverrideAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const override = await prisma.override.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OverrideAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Overrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideCountArgs} args - Arguments to filter Overrides to count.
     * @example
     * // Count the number of Overrides
     * const count = await prisma.override.count({
     *   where: {
     *     // ... the filter for the Overrides we want to count
     *   }
     * })
    **/
    count<T extends OverrideCountArgs>(
      args?: Subset<T, OverrideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OverrideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Override.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OverrideAggregateArgs>(args: Subset<T, OverrideAggregateArgs>): Prisma.PrismaPromise<GetOverrideAggregateType<T>>

    /**
     * Group by Override.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverrideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OverrideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OverrideGroupByArgs['orderBy'] }
        : { orderBy?: OverrideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OverrideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOverrideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Override model
   */
  readonly fields: OverrideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Override.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OverrideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Override model
   */
  interface OverrideFieldRefs {
    readonly id: FieldRef<"Override", 'String'>
    readonly householdId: FieldRef<"Override", 'String'>
    readonly memberId: FieldRef<"Override", 'String'>
    readonly utilities: FieldRef<"Override", 'Float'>
    readonly mealRate: FieldRef<"Override", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Override findUnique
   */
  export type OverrideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter, which Override to fetch.
     */
    where: OverrideWhereUniqueInput
  }

  /**
   * Override findUniqueOrThrow
   */
  export type OverrideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter, which Override to fetch.
     */
    where: OverrideWhereUniqueInput
  }

  /**
   * Override findFirst
   */
  export type OverrideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter, which Override to fetch.
     */
    where?: OverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Overrides to fetch.
     */
    orderBy?: OverrideOrderByWithRelationInput | OverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Overrides.
     */
    cursor?: OverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Overrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Overrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Overrides.
     */
    distinct?: OverrideScalarFieldEnum | OverrideScalarFieldEnum[]
  }

  /**
   * Override findFirstOrThrow
   */
  export type OverrideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter, which Override to fetch.
     */
    where?: OverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Overrides to fetch.
     */
    orderBy?: OverrideOrderByWithRelationInput | OverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Overrides.
     */
    cursor?: OverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Overrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Overrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Overrides.
     */
    distinct?: OverrideScalarFieldEnum | OverrideScalarFieldEnum[]
  }

  /**
   * Override findMany
   */
  export type OverrideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter, which Overrides to fetch.
     */
    where?: OverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Overrides to fetch.
     */
    orderBy?: OverrideOrderByWithRelationInput | OverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Overrides.
     */
    cursor?: OverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Overrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Overrides.
     */
    skip?: number
    distinct?: OverrideScalarFieldEnum | OverrideScalarFieldEnum[]
  }

  /**
   * Override create
   */
  export type OverrideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * The data needed to create a Override.
     */
    data: XOR<OverrideCreateInput, OverrideUncheckedCreateInput>
  }

  /**
   * Override createMany
   */
  export type OverrideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Overrides.
     */
    data: OverrideCreateManyInput | OverrideCreateManyInput[]
  }

  /**
   * Override update
   */
  export type OverrideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * The data needed to update a Override.
     */
    data: XOR<OverrideUpdateInput, OverrideUncheckedUpdateInput>
    /**
     * Choose, which Override to update.
     */
    where: OverrideWhereUniqueInput
  }

  /**
   * Override updateMany
   */
  export type OverrideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Overrides.
     */
    data: XOR<OverrideUpdateManyMutationInput, OverrideUncheckedUpdateManyInput>
    /**
     * Filter which Overrides to update
     */
    where?: OverrideWhereInput
    /**
     * Limit how many Overrides to update.
     */
    limit?: number
  }

  /**
   * Override upsert
   */
  export type OverrideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * The filter to search for the Override to update in case it exists.
     */
    where: OverrideWhereUniqueInput
    /**
     * In case the Override found by the `where` argument doesn't exist, create a new Override with this data.
     */
    create: XOR<OverrideCreateInput, OverrideUncheckedCreateInput>
    /**
     * In case the Override was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OverrideUpdateInput, OverrideUncheckedUpdateInput>
  }

  /**
   * Override delete
   */
  export type OverrideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
    /**
     * Filter which Override to delete.
     */
    where: OverrideWhereUniqueInput
  }

  /**
   * Override deleteMany
   */
  export type OverrideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Overrides to delete
     */
    where?: OverrideWhereInput
    /**
     * Limit how many Overrides to delete.
     */
    limit?: number
  }

  /**
   * Override findRaw
   */
  export type OverrideFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Override aggregateRaw
   */
  export type OverrideAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Override without action
   */
  export type OverrideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Override
     */
    select?: OverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Override
     */
    omit?: OverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverrideInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const HouseholdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    monthKey: 'monthKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    householdId: 'householdId',
    externalId: 'externalId',
    name: 'name',
    initials: 'initials',
    color: 'color'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MealDayScalarFieldEnum: {
    id: 'id',
    householdId: 'householdId',
    date: 'date',
    label: 'label'
  };

  export type MealDayScalarFieldEnum = (typeof MealDayScalarFieldEnum)[keyof typeof MealDayScalarFieldEnum]


  export const MealEntryScalarFieldEnum: {
    id: 'id',
    dayId: 'dayId',
    memberId: 'memberId',
    count: 'count'
  };

  export type MealEntryScalarFieldEnum = (typeof MealEntryScalarFieldEnum)[keyof typeof MealEntryScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    householdId: 'householdId',
    memberId: 'memberId',
    category: 'category',
    amount: 'amount'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const UtilityScalarFieldEnum: {
    id: 'id',
    householdId: 'householdId',
    externalId: 'externalId',
    name: 'name',
    amount: 'amount'
  };

  export type UtilityScalarFieldEnum = (typeof UtilityScalarFieldEnum)[keyof typeof UtilityScalarFieldEnum]


  export const OverrideScalarFieldEnum: {
    id: 'id',
    householdId: 'householdId',
    memberId: 'memberId',
    utilities: 'utilities',
    mealRate: 'mealRate'
  };

  export type OverrideScalarFieldEnum = (typeof OverrideScalarFieldEnum)[keyof typeof OverrideScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    monthKey?: StringFilter<"Household"> | string
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    members?: MemberListRelationFilter
    days?: MealDayListRelationFilter
    expenses?: ExpenseListRelationFilter
    utilities?: UtilityListRelationFilter
    overrides?: OverrideListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    monthKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: MemberOrderByRelationAggregateInput
    days?: MealDayOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    utilities?: UtilityOrderByRelationAggregateInput
    overrides?: OverrideOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_monthKey?: HouseholdNameMonthKeyCompoundUniqueInput
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    monthKey?: StringFilter<"Household"> | string
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    members?: MemberListRelationFilter
    days?: MealDayListRelationFilter
    expenses?: ExpenseListRelationFilter
    utilities?: UtilityListRelationFilter
    overrides?: OverrideListRelationFilter
  }, "id" | "name_monthKey">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    monthKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Household"> | string
    name?: StringWithAggregatesFilter<"Household"> | string
    monthKey?: StringWithAggregatesFilter<"Household"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    householdId?: StringFilter<"Member"> | string
    externalId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    initials?: StringFilter<"Member"> | string
    color?: StringFilter<"Member"> | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    meals?: MealEntryListRelationFilter
    expenses?: ExpenseListRelationFilter
    override?: XOR<OverrideNullableScalarRelationFilter, OverrideWhereInput> | null
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    color?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    meals?: MealEntryOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    override?: OverrideOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    householdId_externalId?: MemberHouseholdIdExternalIdCompoundUniqueInput
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    householdId?: StringFilter<"Member"> | string
    externalId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    initials?: StringFilter<"Member"> | string
    color?: StringFilter<"Member"> | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    meals?: MealEntryListRelationFilter
    expenses?: ExpenseListRelationFilter
    override?: XOR<OverrideNullableScalarRelationFilter, OverrideWhereInput> | null
  }, "id" | "householdId_externalId">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    color?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    householdId?: StringWithAggregatesFilter<"Member"> | string
    externalId?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    initials?: StringWithAggregatesFilter<"Member"> | string
    color?: StringWithAggregatesFilter<"Member"> | string
  }

  export type MealDayWhereInput = {
    AND?: MealDayWhereInput | MealDayWhereInput[]
    OR?: MealDayWhereInput[]
    NOT?: MealDayWhereInput | MealDayWhereInput[]
    id?: StringFilter<"MealDay"> | string
    householdId?: StringFilter<"MealDay"> | string
    date?: StringFilter<"MealDay"> | string
    label?: StringFilter<"MealDay"> | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    entries?: MealEntryListRelationFilter
  }

  export type MealDayOrderByWithRelationInput = {
    id?: SortOrder
    householdId?: SortOrder
    date?: SortOrder
    label?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    entries?: MealEntryOrderByRelationAggregateInput
  }

  export type MealDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    householdId_date?: MealDayHouseholdIdDateCompoundUniqueInput
    AND?: MealDayWhereInput | MealDayWhereInput[]
    OR?: MealDayWhereInput[]
    NOT?: MealDayWhereInput | MealDayWhereInput[]
    householdId?: StringFilter<"MealDay"> | string
    date?: StringFilter<"MealDay"> | string
    label?: StringFilter<"MealDay"> | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    entries?: MealEntryListRelationFilter
  }, "id" | "householdId_date">

  export type MealDayOrderByWithAggregationInput = {
    id?: SortOrder
    householdId?: SortOrder
    date?: SortOrder
    label?: SortOrder
    _count?: MealDayCountOrderByAggregateInput
    _max?: MealDayMaxOrderByAggregateInput
    _min?: MealDayMinOrderByAggregateInput
  }

  export type MealDayScalarWhereWithAggregatesInput = {
    AND?: MealDayScalarWhereWithAggregatesInput | MealDayScalarWhereWithAggregatesInput[]
    OR?: MealDayScalarWhereWithAggregatesInput[]
    NOT?: MealDayScalarWhereWithAggregatesInput | MealDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealDay"> | string
    householdId?: StringWithAggregatesFilter<"MealDay"> | string
    date?: StringWithAggregatesFilter<"MealDay"> | string
    label?: StringWithAggregatesFilter<"MealDay"> | string
  }

  export type MealEntryWhereInput = {
    AND?: MealEntryWhereInput | MealEntryWhereInput[]
    OR?: MealEntryWhereInput[]
    NOT?: MealEntryWhereInput | MealEntryWhereInput[]
    id?: StringFilter<"MealEntry"> | string
    dayId?: StringFilter<"MealEntry"> | string
    memberId?: StringFilter<"MealEntry"> | string
    count?: IntFilter<"MealEntry"> | number
    day?: XOR<MealDayScalarRelationFilter, MealDayWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type MealEntryOrderByWithRelationInput = {
    id?: SortOrder
    dayId?: SortOrder
    memberId?: SortOrder
    count?: SortOrder
    day?: MealDayOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type MealEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dayId_memberId?: MealEntryDayIdMemberIdCompoundUniqueInput
    AND?: MealEntryWhereInput | MealEntryWhereInput[]
    OR?: MealEntryWhereInput[]
    NOT?: MealEntryWhereInput | MealEntryWhereInput[]
    dayId?: StringFilter<"MealEntry"> | string
    memberId?: StringFilter<"MealEntry"> | string
    count?: IntFilter<"MealEntry"> | number
    day?: XOR<MealDayScalarRelationFilter, MealDayWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id" | "dayId_memberId">

  export type MealEntryOrderByWithAggregationInput = {
    id?: SortOrder
    dayId?: SortOrder
    memberId?: SortOrder
    count?: SortOrder
    _count?: MealEntryCountOrderByAggregateInput
    _avg?: MealEntryAvgOrderByAggregateInput
    _max?: MealEntryMaxOrderByAggregateInput
    _min?: MealEntryMinOrderByAggregateInput
    _sum?: MealEntrySumOrderByAggregateInput
  }

  export type MealEntryScalarWhereWithAggregatesInput = {
    AND?: MealEntryScalarWhereWithAggregatesInput | MealEntryScalarWhereWithAggregatesInput[]
    OR?: MealEntryScalarWhereWithAggregatesInput[]
    NOT?: MealEntryScalarWhereWithAggregatesInput | MealEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealEntry"> | string
    dayId?: StringWithAggregatesFilter<"MealEntry"> | string
    memberId?: StringWithAggregatesFilter<"MealEntry"> | string
    count?: IntWithAggregatesFilter<"MealEntry"> | number
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    householdId?: StringFilter<"Expense"> | string
    memberId?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    householdId_memberId_category?: ExpenseHouseholdIdMemberIdCategoryCompoundUniqueInput
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    householdId?: StringFilter<"Expense"> | string
    memberId?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id" | "householdId_memberId_category">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    householdId?: StringWithAggregatesFilter<"Expense"> | string
    memberId?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
  }

  export type UtilityWhereInput = {
    AND?: UtilityWhereInput | UtilityWhereInput[]
    OR?: UtilityWhereInput[]
    NOT?: UtilityWhereInput | UtilityWhereInput[]
    id?: StringFilter<"Utility"> | string
    householdId?: StringFilter<"Utility"> | string
    externalId?: StringFilter<"Utility"> | string
    name?: StringFilter<"Utility"> | string
    amount?: FloatFilter<"Utility"> | number
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
  }

  export type UtilityOrderByWithRelationInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    household?: HouseholdOrderByWithRelationInput
  }

  export type UtilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    householdId_externalId?: UtilityHouseholdIdExternalIdCompoundUniqueInput
    AND?: UtilityWhereInput | UtilityWhereInput[]
    OR?: UtilityWhereInput[]
    NOT?: UtilityWhereInput | UtilityWhereInput[]
    householdId?: StringFilter<"Utility"> | string
    externalId?: StringFilter<"Utility"> | string
    name?: StringFilter<"Utility"> | string
    amount?: FloatFilter<"Utility"> | number
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
  }, "id" | "householdId_externalId">

  export type UtilityOrderByWithAggregationInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    _count?: UtilityCountOrderByAggregateInput
    _avg?: UtilityAvgOrderByAggregateInput
    _max?: UtilityMaxOrderByAggregateInput
    _min?: UtilityMinOrderByAggregateInput
    _sum?: UtilitySumOrderByAggregateInput
  }

  export type UtilityScalarWhereWithAggregatesInput = {
    AND?: UtilityScalarWhereWithAggregatesInput | UtilityScalarWhereWithAggregatesInput[]
    OR?: UtilityScalarWhereWithAggregatesInput[]
    NOT?: UtilityScalarWhereWithAggregatesInput | UtilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utility"> | string
    householdId?: StringWithAggregatesFilter<"Utility"> | string
    externalId?: StringWithAggregatesFilter<"Utility"> | string
    name?: StringWithAggregatesFilter<"Utility"> | string
    amount?: FloatWithAggregatesFilter<"Utility"> | number
  }

  export type OverrideWhereInput = {
    AND?: OverrideWhereInput | OverrideWhereInput[]
    OR?: OverrideWhereInput[]
    NOT?: OverrideWhereInput | OverrideWhereInput[]
    id?: StringFilter<"Override"> | string
    householdId?: StringFilter<"Override"> | string
    memberId?: StringFilter<"Override"> | string
    utilities?: FloatNullableFilter<"Override"> | number | null
    mealRate?: FloatNullableFilter<"Override"> | number | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type OverrideOrderByWithRelationInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    utilities?: SortOrder
    mealRate?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type OverrideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: string
    AND?: OverrideWhereInput | OverrideWhereInput[]
    OR?: OverrideWhereInput[]
    NOT?: OverrideWhereInput | OverrideWhereInput[]
    householdId?: StringFilter<"Override"> | string
    utilities?: FloatNullableFilter<"Override"> | number | null
    mealRate?: FloatNullableFilter<"Override"> | number | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id" | "memberId">

  export type OverrideOrderByWithAggregationInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    utilities?: SortOrder
    mealRate?: SortOrder
    _count?: OverrideCountOrderByAggregateInput
    _avg?: OverrideAvgOrderByAggregateInput
    _max?: OverrideMaxOrderByAggregateInput
    _min?: OverrideMinOrderByAggregateInput
    _sum?: OverrideSumOrderByAggregateInput
  }

  export type OverrideScalarWhereWithAggregatesInput = {
    AND?: OverrideScalarWhereWithAggregatesInput | OverrideScalarWhereWithAggregatesInput[]
    OR?: OverrideScalarWhereWithAggregatesInput[]
    NOT?: OverrideScalarWhereWithAggregatesInput | OverrideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Override"> | string
    householdId?: StringWithAggregatesFilter<"Override"> | string
    memberId?: StringWithAggregatesFilter<"Override"> | string
    utilities?: FloatNullableWithAggregatesFilter<"Override"> | number | null
    mealRate?: FloatNullableWithAggregatesFilter<"Override"> | number | null
  }

  export type HouseholdCreateInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutHouseholdInput
    days?: MealDayCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutHouseholdInput
    days?: MealDayUncheckedCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityUncheckedCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUncheckedUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUncheckedUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    household: HouseholdCreateNestedOneWithoutMembersInput
    meals?: MealEntryCreateNestedManyWithoutMemberInput
    expenses?: ExpenseCreateNestedManyWithoutMemberInput
    override?: OverrideCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
    meals?: MealEntryUncheckedCreateNestedManyWithoutMemberInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutMemberInput
    override?: OverrideUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberUpdateInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    meals?: MealEntryUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUpdateManyWithoutMemberNestedInput
    override?: OverrideUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    meals?: MealEntryUncheckedUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutMemberNestedInput
    override?: OverrideUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
  }

  export type MemberUpdateManyMutationInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type MealDayCreateInput = {
    id?: string
    date: string
    label: string
    household: HouseholdCreateNestedOneWithoutDaysInput
    entries?: MealEntryCreateNestedManyWithoutDayInput
  }

  export type MealDayUncheckedCreateInput = {
    id?: string
    householdId: string
    date: string
    label: string
    entries?: MealEntryUncheckedCreateNestedManyWithoutDayInput
  }

  export type MealDayUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutDaysNestedInput
    entries?: MealEntryUpdateManyWithoutDayNestedInput
  }

  export type MealDayUncheckedUpdateInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    entries?: MealEntryUncheckedUpdateManyWithoutDayNestedInput
  }

  export type MealDayCreateManyInput = {
    id?: string
    householdId: string
    date: string
    label: string
  }

  export type MealDayUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MealDayUncheckedUpdateManyInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MealEntryCreateInput = {
    id?: string
    count: number
    day: MealDayCreateNestedOneWithoutEntriesInput
    member: MemberCreateNestedOneWithoutMealsInput
  }

  export type MealEntryUncheckedCreateInput = {
    id?: string
    dayId: string
    memberId: string
    count: number
  }

  export type MealEntryUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    day?: MealDayUpdateOneRequiredWithoutEntriesNestedInput
    member?: MemberUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealEntryUncheckedUpdateInput = {
    dayId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MealEntryCreateManyInput = {
    id?: string
    dayId: string
    memberId: string
    count: number
  }

  export type MealEntryUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MealEntryUncheckedUpdateManyInput = {
    dayId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateInput = {
    id?: string
    category: string
    amount: number
    household: HouseholdCreateNestedOneWithoutExpensesInput
    member: MemberCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    householdId: string
    memberId: string
    category: string
    amount: number
  }

  export type ExpenseUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    household?: HouseholdUpdateOneRequiredWithoutExpensesNestedInput
    member?: MemberUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateManyInput = {
    id?: string
    householdId: string
    memberId: string
    category: string
    amount: number
  }

  export type ExpenseUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseUncheckedUpdateManyInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityCreateInput = {
    id?: string
    externalId: string
    name: string
    amount: number
    household: HouseholdCreateNestedOneWithoutUtilitiesInput
  }

  export type UtilityUncheckedCreateInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    amount: number
  }

  export type UtilityUpdateInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    household?: HouseholdUpdateOneRequiredWithoutUtilitiesNestedInput
  }

  export type UtilityUncheckedUpdateInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityCreateManyInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    amount: number
  }

  export type UtilityUpdateManyMutationInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityUncheckedUpdateManyInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type OverrideCreateInput = {
    id?: string
    utilities?: number | null
    mealRate?: number | null
    household: HouseholdCreateNestedOneWithoutOverridesInput
    member: MemberCreateNestedOneWithoutOverrideInput
  }

  export type OverrideUncheckedCreateInput = {
    id?: string
    householdId: string
    memberId: string
    utilities?: number | null
    mealRate?: number | null
  }

  export type OverrideUpdateInput = {
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneRequiredWithoutOverridesNestedInput
    member?: MemberUpdateOneRequiredWithoutOverrideNestedInput
  }

  export type OverrideUncheckedUpdateInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OverrideCreateManyInput = {
    id?: string
    householdId: string
    memberId: string
    utilities?: number | null
    mealRate?: number | null
  }

  export type OverrideUpdateManyMutationInput = {
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OverrideUncheckedUpdateManyInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MealDayListRelationFilter = {
    every?: MealDayWhereInput
    some?: MealDayWhereInput
    none?: MealDayWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type UtilityListRelationFilter = {
    every?: UtilityWhereInput
    some?: UtilityWhereInput
    none?: UtilityWhereInput
  }

  export type OverrideListRelationFilter = {
    every?: OverrideWhereInput
    some?: OverrideWhereInput
    none?: OverrideWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OverrideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdNameMonthKeyCompoundUniqueInput = {
    name: string
    monthKey: string
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type MealEntryListRelationFilter = {
    every?: MealEntryWhereInput
    some?: MealEntryWhereInput
    none?: MealEntryWhereInput
  }

  export type OverrideNullableScalarRelationFilter = {
    is?: OverrideWhereInput | null
    isNot?: OverrideWhereInput | null
  }

  export type MealEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberHouseholdIdExternalIdCompoundUniqueInput = {
    householdId: string
    externalId: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    color?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    color?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    initials?: SortOrder
    color?: SortOrder
  }

  export type MealDayHouseholdIdDateCompoundUniqueInput = {
    householdId: string
    date: string
  }

  export type MealDayCountOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    date?: SortOrder
    label?: SortOrder
  }

  export type MealDayMaxOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    date?: SortOrder
    label?: SortOrder
  }

  export type MealDayMinOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    date?: SortOrder
    label?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MealDayScalarRelationFilter = {
    is?: MealDayWhereInput
    isNot?: MealDayWhereInput
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type MealEntryDayIdMemberIdCompoundUniqueInput = {
    dayId: string
    memberId: string
  }

  export type MealEntryCountOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    memberId?: SortOrder
    count?: SortOrder
  }

  export type MealEntryAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type MealEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    memberId?: SortOrder
    count?: SortOrder
  }

  export type MealEntryMinOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    memberId?: SortOrder
    count?: SortOrder
  }

  export type MealEntrySumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExpenseHouseholdIdMemberIdCategoryCompoundUniqueInput = {
    householdId: string
    memberId: string
    category: string
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UtilityHouseholdIdExternalIdCompoundUniqueInput = {
    householdId: string
    externalId: string
  }

  export type UtilityCountOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
  }

  export type UtilityAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UtilityMaxOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
  }

  export type UtilityMinOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    amount?: SortOrder
  }

  export type UtilitySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type OverrideCountOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    utilities?: SortOrder
    mealRate?: SortOrder
  }

  export type OverrideAvgOrderByAggregateInput = {
    utilities?: SortOrder
    mealRate?: SortOrder
  }

  export type OverrideMaxOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    utilities?: SortOrder
    mealRate?: SortOrder
  }

  export type OverrideMinOrderByAggregateInput = {
    id?: SortOrder
    householdId?: SortOrder
    memberId?: SortOrder
    utilities?: SortOrder
    mealRate?: SortOrder
  }

  export type OverrideSumOrderByAggregateInput = {
    utilities?: SortOrder
    mealRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MemberCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput> | MemberCreateWithoutHouseholdInput[] | MemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutHouseholdInput | MemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: MemberCreateManyHouseholdInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MealDayCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput> | MealDayCreateWithoutHouseholdInput[] | MealDayUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MealDayCreateOrConnectWithoutHouseholdInput | MealDayCreateOrConnectWithoutHouseholdInput[]
    createMany?: MealDayCreateManyHouseholdInputEnvelope
    connect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput> | ExpenseCreateWithoutHouseholdInput[] | ExpenseUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseholdInput | ExpenseCreateOrConnectWithoutHouseholdInput[]
    createMany?: ExpenseCreateManyHouseholdInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UtilityCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput> | UtilityCreateWithoutHouseholdInput[] | UtilityUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UtilityCreateOrConnectWithoutHouseholdInput | UtilityCreateOrConnectWithoutHouseholdInput[]
    createMany?: UtilityCreateManyHouseholdInputEnvelope
    connect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
  }

  export type OverrideCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput> | OverrideCreateWithoutHouseholdInput[] | OverrideUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: OverrideCreateOrConnectWithoutHouseholdInput | OverrideCreateOrConnectWithoutHouseholdInput[]
    createMany?: OverrideCreateManyHouseholdInputEnvelope
    connect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput> | MemberCreateWithoutHouseholdInput[] | MemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutHouseholdInput | MemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: MemberCreateManyHouseholdInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MealDayUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput> | MealDayCreateWithoutHouseholdInput[] | MealDayUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MealDayCreateOrConnectWithoutHouseholdInput | MealDayCreateOrConnectWithoutHouseholdInput[]
    createMany?: MealDayCreateManyHouseholdInputEnvelope
    connect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput> | ExpenseCreateWithoutHouseholdInput[] | ExpenseUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseholdInput | ExpenseCreateOrConnectWithoutHouseholdInput[]
    createMany?: ExpenseCreateManyHouseholdInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UtilityUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput> | UtilityCreateWithoutHouseholdInput[] | UtilityUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UtilityCreateOrConnectWithoutHouseholdInput | UtilityCreateOrConnectWithoutHouseholdInput[]
    createMany?: UtilityCreateManyHouseholdInputEnvelope
    connect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
  }

  export type OverrideUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput> | OverrideCreateWithoutHouseholdInput[] | OverrideUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: OverrideCreateOrConnectWithoutHouseholdInput | OverrideCreateOrConnectWithoutHouseholdInput[]
    createMany?: OverrideCreateManyHouseholdInputEnvelope
    connect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MemberUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput> | MemberCreateWithoutHouseholdInput[] | MemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutHouseholdInput | MemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutHouseholdInput | MemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: MemberCreateManyHouseholdInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutHouseholdInput | MemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutHouseholdInput | MemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MealDayUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput> | MealDayCreateWithoutHouseholdInput[] | MealDayUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MealDayCreateOrConnectWithoutHouseholdInput | MealDayCreateOrConnectWithoutHouseholdInput[]
    upsert?: MealDayUpsertWithWhereUniqueWithoutHouseholdInput | MealDayUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: MealDayCreateManyHouseholdInputEnvelope
    set?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    disconnect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    delete?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    connect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    update?: MealDayUpdateWithWhereUniqueWithoutHouseholdInput | MealDayUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: MealDayUpdateManyWithWhereWithoutHouseholdInput | MealDayUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: MealDayScalarWhereInput | MealDayScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput> | ExpenseCreateWithoutHouseholdInput[] | ExpenseUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseholdInput | ExpenseCreateOrConnectWithoutHouseholdInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutHouseholdInput | ExpenseUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ExpenseCreateManyHouseholdInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutHouseholdInput | ExpenseUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutHouseholdInput | ExpenseUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UtilityUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput> | UtilityCreateWithoutHouseholdInput[] | UtilityUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UtilityCreateOrConnectWithoutHouseholdInput | UtilityCreateOrConnectWithoutHouseholdInput[]
    upsert?: UtilityUpsertWithWhereUniqueWithoutHouseholdInput | UtilityUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UtilityCreateManyHouseholdInputEnvelope
    set?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    disconnect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    delete?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    connect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    update?: UtilityUpdateWithWhereUniqueWithoutHouseholdInput | UtilityUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UtilityUpdateManyWithWhereWithoutHouseholdInput | UtilityUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UtilityScalarWhereInput | UtilityScalarWhereInput[]
  }

  export type OverrideUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput> | OverrideCreateWithoutHouseholdInput[] | OverrideUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: OverrideCreateOrConnectWithoutHouseholdInput | OverrideCreateOrConnectWithoutHouseholdInput[]
    upsert?: OverrideUpsertWithWhereUniqueWithoutHouseholdInput | OverrideUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: OverrideCreateManyHouseholdInputEnvelope
    set?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    disconnect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    delete?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    connect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    update?: OverrideUpdateWithWhereUniqueWithoutHouseholdInput | OverrideUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: OverrideUpdateManyWithWhereWithoutHouseholdInput | OverrideUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: OverrideScalarWhereInput | OverrideScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput> | MemberCreateWithoutHouseholdInput[] | MemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutHouseholdInput | MemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutHouseholdInput | MemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: MemberCreateManyHouseholdInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutHouseholdInput | MemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutHouseholdInput | MemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MealDayUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput> | MealDayCreateWithoutHouseholdInput[] | MealDayUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: MealDayCreateOrConnectWithoutHouseholdInput | MealDayCreateOrConnectWithoutHouseholdInput[]
    upsert?: MealDayUpsertWithWhereUniqueWithoutHouseholdInput | MealDayUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: MealDayCreateManyHouseholdInputEnvelope
    set?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    disconnect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    delete?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    connect?: MealDayWhereUniqueInput | MealDayWhereUniqueInput[]
    update?: MealDayUpdateWithWhereUniqueWithoutHouseholdInput | MealDayUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: MealDayUpdateManyWithWhereWithoutHouseholdInput | MealDayUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: MealDayScalarWhereInput | MealDayScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput> | ExpenseCreateWithoutHouseholdInput[] | ExpenseUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseholdInput | ExpenseCreateOrConnectWithoutHouseholdInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutHouseholdInput | ExpenseUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ExpenseCreateManyHouseholdInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutHouseholdInput | ExpenseUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutHouseholdInput | ExpenseUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UtilityUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput> | UtilityCreateWithoutHouseholdInput[] | UtilityUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UtilityCreateOrConnectWithoutHouseholdInput | UtilityCreateOrConnectWithoutHouseholdInput[]
    upsert?: UtilityUpsertWithWhereUniqueWithoutHouseholdInput | UtilityUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UtilityCreateManyHouseholdInputEnvelope
    set?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    disconnect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    delete?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    connect?: UtilityWhereUniqueInput | UtilityWhereUniqueInput[]
    update?: UtilityUpdateWithWhereUniqueWithoutHouseholdInput | UtilityUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UtilityUpdateManyWithWhereWithoutHouseholdInput | UtilityUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UtilityScalarWhereInput | UtilityScalarWhereInput[]
  }

  export type OverrideUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput> | OverrideCreateWithoutHouseholdInput[] | OverrideUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: OverrideCreateOrConnectWithoutHouseholdInput | OverrideCreateOrConnectWithoutHouseholdInput[]
    upsert?: OverrideUpsertWithWhereUniqueWithoutHouseholdInput | OverrideUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: OverrideCreateManyHouseholdInputEnvelope
    set?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    disconnect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    delete?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    connect?: OverrideWhereUniqueInput | OverrideWhereUniqueInput[]
    update?: OverrideUpdateWithWhereUniqueWithoutHouseholdInput | OverrideUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: OverrideUpdateManyWithWhereWithoutHouseholdInput | OverrideUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: OverrideScalarWhereInput | OverrideScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
  }

  export type MealEntryCreateNestedManyWithoutMemberInput = {
    create?: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput> | MealEntryCreateWithoutMemberInput[] | MealEntryUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutMemberInput | MealEntryCreateOrConnectWithoutMemberInput[]
    createMany?: MealEntryCreateManyMemberInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutMemberInput = {
    create?: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput> | ExpenseCreateWithoutMemberInput[] | ExpenseUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutMemberInput | ExpenseCreateOrConnectWithoutMemberInput[]
    createMany?: ExpenseCreateManyMemberInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type OverrideCreateNestedOneWithoutMemberInput = {
    create?: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
    connectOrCreate?: OverrideCreateOrConnectWithoutMemberInput
    connect?: OverrideWhereUniqueInput
  }

  export type MealEntryUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput> | MealEntryCreateWithoutMemberInput[] | MealEntryUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutMemberInput | MealEntryCreateOrConnectWithoutMemberInput[]
    createMany?: MealEntryCreateManyMemberInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput> | ExpenseCreateWithoutMemberInput[] | ExpenseUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutMemberInput | ExpenseCreateOrConnectWithoutMemberInput[]
    createMany?: ExpenseCreateManyMemberInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type OverrideUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
    connectOrCreate?: OverrideCreateOrConnectWithoutMemberInput
    connect?: OverrideWhereUniqueInput
  }

  export type HouseholdUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    upsert?: HouseholdUpsertWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutMembersInput, HouseholdUpdateWithoutMembersInput>, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type MealEntryUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput> | MealEntryCreateWithoutMemberInput[] | MealEntryUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutMemberInput | MealEntryCreateOrConnectWithoutMemberInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutMemberInput | MealEntryUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MealEntryCreateManyMemberInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutMemberInput | MealEntryUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutMemberInput | MealEntryUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput> | ExpenseCreateWithoutMemberInput[] | ExpenseUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutMemberInput | ExpenseCreateOrConnectWithoutMemberInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutMemberInput | ExpenseUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ExpenseCreateManyMemberInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutMemberInput | ExpenseUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutMemberInput | ExpenseUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type OverrideUpdateOneWithoutMemberNestedInput = {
    create?: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
    connectOrCreate?: OverrideCreateOrConnectWithoutMemberInput
    upsert?: OverrideUpsertWithoutMemberInput
    disconnect?: OverrideWhereInput | boolean
    delete?: OverrideWhereInput | boolean
    connect?: OverrideWhereUniqueInput
    update?: XOR<XOR<OverrideUpdateToOneWithWhereWithoutMemberInput, OverrideUpdateWithoutMemberInput>, OverrideUncheckedUpdateWithoutMemberInput>
  }

  export type MealEntryUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput> | MealEntryCreateWithoutMemberInput[] | MealEntryUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutMemberInput | MealEntryCreateOrConnectWithoutMemberInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutMemberInput | MealEntryUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MealEntryCreateManyMemberInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutMemberInput | MealEntryUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutMemberInput | MealEntryUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput> | ExpenseCreateWithoutMemberInput[] | ExpenseUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutMemberInput | ExpenseCreateOrConnectWithoutMemberInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutMemberInput | ExpenseUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ExpenseCreateManyMemberInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutMemberInput | ExpenseUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutMemberInput | ExpenseUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type OverrideUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
    connectOrCreate?: OverrideCreateOrConnectWithoutMemberInput
    upsert?: OverrideUpsertWithoutMemberInput
    disconnect?: OverrideWhereInput | boolean
    delete?: OverrideWhereInput | boolean
    connect?: OverrideWhereUniqueInput
    update?: XOR<XOR<OverrideUpdateToOneWithWhereWithoutMemberInput, OverrideUpdateWithoutMemberInput>, OverrideUncheckedUpdateWithoutMemberInput>
  }

  export type HouseholdCreateNestedOneWithoutDaysInput = {
    create?: XOR<HouseholdCreateWithoutDaysInput, HouseholdUncheckedCreateWithoutDaysInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutDaysInput
    connect?: HouseholdWhereUniqueInput
  }

  export type MealEntryCreateNestedManyWithoutDayInput = {
    create?: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput> | MealEntryCreateWithoutDayInput[] | MealEntryUncheckedCreateWithoutDayInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutDayInput | MealEntryCreateOrConnectWithoutDayInput[]
    createMany?: MealEntryCreateManyDayInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type MealEntryUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput> | MealEntryCreateWithoutDayInput[] | MealEntryUncheckedCreateWithoutDayInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutDayInput | MealEntryCreateOrConnectWithoutDayInput[]
    createMany?: MealEntryCreateManyDayInputEnvelope
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
  }

  export type HouseholdUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<HouseholdCreateWithoutDaysInput, HouseholdUncheckedCreateWithoutDaysInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutDaysInput
    upsert?: HouseholdUpsertWithoutDaysInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutDaysInput, HouseholdUpdateWithoutDaysInput>, HouseholdUncheckedUpdateWithoutDaysInput>
  }

  export type MealEntryUpdateManyWithoutDayNestedInput = {
    create?: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput> | MealEntryCreateWithoutDayInput[] | MealEntryUncheckedCreateWithoutDayInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutDayInput | MealEntryCreateOrConnectWithoutDayInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutDayInput | MealEntryUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: MealEntryCreateManyDayInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutDayInput | MealEntryUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutDayInput | MealEntryUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type MealEntryUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput> | MealEntryCreateWithoutDayInput[] | MealEntryUncheckedCreateWithoutDayInput[]
    connectOrCreate?: MealEntryCreateOrConnectWithoutDayInput | MealEntryCreateOrConnectWithoutDayInput[]
    upsert?: MealEntryUpsertWithWhereUniqueWithoutDayInput | MealEntryUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: MealEntryCreateManyDayInputEnvelope
    set?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    disconnect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    delete?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    connect?: MealEntryWhereUniqueInput | MealEntryWhereUniqueInput[]
    update?: MealEntryUpdateWithWhereUniqueWithoutDayInput | MealEntryUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: MealEntryUpdateManyWithWhereWithoutDayInput | MealEntryUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
  }

  export type MealDayCreateNestedOneWithoutEntriesInput = {
    create?: XOR<MealDayCreateWithoutEntriesInput, MealDayUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: MealDayCreateOrConnectWithoutEntriesInput
    connect?: MealDayWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutMealsInput = {
    create?: XOR<MemberCreateWithoutMealsInput, MemberUncheckedCreateWithoutMealsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMealsInput
    connect?: MemberWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealDayUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<MealDayCreateWithoutEntriesInput, MealDayUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: MealDayCreateOrConnectWithoutEntriesInput
    upsert?: MealDayUpsertWithoutEntriesInput
    connect?: MealDayWhereUniqueInput
    update?: XOR<XOR<MealDayUpdateToOneWithWhereWithoutEntriesInput, MealDayUpdateWithoutEntriesInput>, MealDayUncheckedUpdateWithoutEntriesInput>
  }

  export type MemberUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<MemberCreateWithoutMealsInput, MemberUncheckedCreateWithoutMealsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMealsInput
    upsert?: MemberUpsertWithoutMealsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMealsInput, MemberUpdateWithoutMealsInput>, MemberUncheckedUpdateWithoutMealsInput>
  }

  export type HouseholdCreateNestedOneWithoutExpensesInput = {
    create?: XOR<HouseholdCreateWithoutExpensesInput, HouseholdUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutExpensesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutExpensesInput = {
    create?: XOR<MemberCreateWithoutExpensesInput, MemberUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutExpensesInput
    connect?: MemberWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HouseholdUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<HouseholdCreateWithoutExpensesInput, HouseholdUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutExpensesInput
    upsert?: HouseholdUpsertWithoutExpensesInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutExpensesInput, HouseholdUpdateWithoutExpensesInput>, HouseholdUncheckedUpdateWithoutExpensesInput>
  }

  export type MemberUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<MemberCreateWithoutExpensesInput, MemberUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutExpensesInput
    upsert?: MemberUpsertWithoutExpensesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutExpensesInput, MemberUpdateWithoutExpensesInput>, MemberUncheckedUpdateWithoutExpensesInput>
  }

  export type HouseholdCreateNestedOneWithoutUtilitiesInput = {
    create?: XOR<HouseholdCreateWithoutUtilitiesInput, HouseholdUncheckedCreateWithoutUtilitiesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutUtilitiesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type HouseholdUpdateOneRequiredWithoutUtilitiesNestedInput = {
    create?: XOR<HouseholdCreateWithoutUtilitiesInput, HouseholdUncheckedCreateWithoutUtilitiesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutUtilitiesInput
    upsert?: HouseholdUpsertWithoutUtilitiesInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutUtilitiesInput, HouseholdUpdateWithoutUtilitiesInput>, HouseholdUncheckedUpdateWithoutUtilitiesInput>
  }

  export type HouseholdCreateNestedOneWithoutOverridesInput = {
    create?: XOR<HouseholdCreateWithoutOverridesInput, HouseholdUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutOverridesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutOverrideInput = {
    create?: XOR<MemberCreateWithoutOverrideInput, MemberUncheckedCreateWithoutOverrideInput>
    connectOrCreate?: MemberCreateOrConnectWithoutOverrideInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type HouseholdUpdateOneRequiredWithoutOverridesNestedInput = {
    create?: XOR<HouseholdCreateWithoutOverridesInput, HouseholdUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutOverridesInput
    upsert?: HouseholdUpsertWithoutOverridesInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutOverridesInput, HouseholdUpdateWithoutOverridesInput>, HouseholdUncheckedUpdateWithoutOverridesInput>
  }

  export type MemberUpdateOneRequiredWithoutOverrideNestedInput = {
    create?: XOR<MemberCreateWithoutOverrideInput, MemberUncheckedCreateWithoutOverrideInput>
    connectOrCreate?: MemberCreateOrConnectWithoutOverrideInput
    upsert?: MemberUpsertWithoutOverrideInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutOverrideInput, MemberUpdateWithoutOverrideInput>, MemberUncheckedUpdateWithoutOverrideInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MemberCreateWithoutHouseholdInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    meals?: MealEntryCreateNestedManyWithoutMemberInput
    expenses?: ExpenseCreateNestedManyWithoutMemberInput
    override?: OverrideCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutHouseholdInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    meals?: MealEntryUncheckedCreateNestedManyWithoutMemberInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutMemberInput
    override?: OverrideUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutHouseholdInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput>
  }

  export type MemberCreateManyHouseholdInputEnvelope = {
    data: MemberCreateManyHouseholdInput | MemberCreateManyHouseholdInput[]
  }

  export type MealDayCreateWithoutHouseholdInput = {
    id?: string
    date: string
    label: string
    entries?: MealEntryCreateNestedManyWithoutDayInput
  }

  export type MealDayUncheckedCreateWithoutHouseholdInput = {
    id?: string
    date: string
    label: string
    entries?: MealEntryUncheckedCreateNestedManyWithoutDayInput
  }

  export type MealDayCreateOrConnectWithoutHouseholdInput = {
    where: MealDayWhereUniqueInput
    create: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput>
  }

  export type MealDayCreateManyHouseholdInputEnvelope = {
    data: MealDayCreateManyHouseholdInput | MealDayCreateManyHouseholdInput[]
  }

  export type ExpenseCreateWithoutHouseholdInput = {
    id?: string
    category: string
    amount: number
    member: MemberCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutHouseholdInput = {
    id?: string
    memberId: string
    category: string
    amount: number
  }

  export type ExpenseCreateOrConnectWithoutHouseholdInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput>
  }

  export type ExpenseCreateManyHouseholdInputEnvelope = {
    data: ExpenseCreateManyHouseholdInput | ExpenseCreateManyHouseholdInput[]
  }

  export type UtilityCreateWithoutHouseholdInput = {
    id?: string
    externalId: string
    name: string
    amount: number
  }

  export type UtilityUncheckedCreateWithoutHouseholdInput = {
    id?: string
    externalId: string
    name: string
    amount: number
  }

  export type UtilityCreateOrConnectWithoutHouseholdInput = {
    where: UtilityWhereUniqueInput
    create: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput>
  }

  export type UtilityCreateManyHouseholdInputEnvelope = {
    data: UtilityCreateManyHouseholdInput | UtilityCreateManyHouseholdInput[]
  }

  export type OverrideCreateWithoutHouseholdInput = {
    id?: string
    utilities?: number | null
    mealRate?: number | null
    member: MemberCreateNestedOneWithoutOverrideInput
  }

  export type OverrideUncheckedCreateWithoutHouseholdInput = {
    id?: string
    memberId: string
    utilities?: number | null
    mealRate?: number | null
  }

  export type OverrideCreateOrConnectWithoutHouseholdInput = {
    where: OverrideWhereUniqueInput
    create: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput>
  }

  export type OverrideCreateManyHouseholdInputEnvelope = {
    data: OverrideCreateManyHouseholdInput | OverrideCreateManyHouseholdInput[]
  }

  export type MemberUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutHouseholdInput, MemberUncheckedUpdateWithoutHouseholdInput>
    create: XOR<MemberCreateWithoutHouseholdInput, MemberUncheckedCreateWithoutHouseholdInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutHouseholdInput, MemberUncheckedUpdateWithoutHouseholdInput>
  }

  export type MemberUpdateManyWithWhereWithoutHouseholdInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    householdId?: StringFilter<"Member"> | string
    externalId?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    initials?: StringFilter<"Member"> | string
    color?: StringFilter<"Member"> | string
  }

  export type MealDayUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: MealDayWhereUniqueInput
    update: XOR<MealDayUpdateWithoutHouseholdInput, MealDayUncheckedUpdateWithoutHouseholdInput>
    create: XOR<MealDayCreateWithoutHouseholdInput, MealDayUncheckedCreateWithoutHouseholdInput>
  }

  export type MealDayUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: MealDayWhereUniqueInput
    data: XOR<MealDayUpdateWithoutHouseholdInput, MealDayUncheckedUpdateWithoutHouseholdInput>
  }

  export type MealDayUpdateManyWithWhereWithoutHouseholdInput = {
    where: MealDayScalarWhereInput
    data: XOR<MealDayUpdateManyMutationInput, MealDayUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type MealDayScalarWhereInput = {
    AND?: MealDayScalarWhereInput | MealDayScalarWhereInput[]
    OR?: MealDayScalarWhereInput[]
    NOT?: MealDayScalarWhereInput | MealDayScalarWhereInput[]
    id?: StringFilter<"MealDay"> | string
    householdId?: StringFilter<"MealDay"> | string
    date?: StringFilter<"MealDay"> | string
    label?: StringFilter<"MealDay"> | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutHouseholdInput, ExpenseUncheckedUpdateWithoutHouseholdInput>
    create: XOR<ExpenseCreateWithoutHouseholdInput, ExpenseUncheckedCreateWithoutHouseholdInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutHouseholdInput, ExpenseUncheckedUpdateWithoutHouseholdInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutHouseholdInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    householdId?: StringFilter<"Expense"> | string
    memberId?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
  }

  export type UtilityUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: UtilityWhereUniqueInput
    update: XOR<UtilityUpdateWithoutHouseholdInput, UtilityUncheckedUpdateWithoutHouseholdInput>
    create: XOR<UtilityCreateWithoutHouseholdInput, UtilityUncheckedCreateWithoutHouseholdInput>
  }

  export type UtilityUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: UtilityWhereUniqueInput
    data: XOR<UtilityUpdateWithoutHouseholdInput, UtilityUncheckedUpdateWithoutHouseholdInput>
  }

  export type UtilityUpdateManyWithWhereWithoutHouseholdInput = {
    where: UtilityScalarWhereInput
    data: XOR<UtilityUpdateManyMutationInput, UtilityUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type UtilityScalarWhereInput = {
    AND?: UtilityScalarWhereInput | UtilityScalarWhereInput[]
    OR?: UtilityScalarWhereInput[]
    NOT?: UtilityScalarWhereInput | UtilityScalarWhereInput[]
    id?: StringFilter<"Utility"> | string
    householdId?: StringFilter<"Utility"> | string
    externalId?: StringFilter<"Utility"> | string
    name?: StringFilter<"Utility"> | string
    amount?: FloatFilter<"Utility"> | number
  }

  export type OverrideUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: OverrideWhereUniqueInput
    update: XOR<OverrideUpdateWithoutHouseholdInput, OverrideUncheckedUpdateWithoutHouseholdInput>
    create: XOR<OverrideCreateWithoutHouseholdInput, OverrideUncheckedCreateWithoutHouseholdInput>
  }

  export type OverrideUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: OverrideWhereUniqueInput
    data: XOR<OverrideUpdateWithoutHouseholdInput, OverrideUncheckedUpdateWithoutHouseholdInput>
  }

  export type OverrideUpdateManyWithWhereWithoutHouseholdInput = {
    where: OverrideScalarWhereInput
    data: XOR<OverrideUpdateManyMutationInput, OverrideUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type OverrideScalarWhereInput = {
    AND?: OverrideScalarWhereInput | OverrideScalarWhereInput[]
    OR?: OverrideScalarWhereInput[]
    NOT?: OverrideScalarWhereInput | OverrideScalarWhereInput[]
    id?: StringFilter<"Override"> | string
    householdId?: StringFilter<"Override"> | string
    memberId?: StringFilter<"Override"> | string
    utilities?: FloatNullableFilter<"Override"> | number | null
    mealRate?: FloatNullableFilter<"Override"> | number | null
  }

  export type HouseholdCreateWithoutMembersInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: MealDayCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: MealDayUncheckedCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityUncheckedCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type MealEntryCreateWithoutMemberInput = {
    id?: string
    count: number
    day: MealDayCreateNestedOneWithoutEntriesInput
  }

  export type MealEntryUncheckedCreateWithoutMemberInput = {
    id?: string
    dayId: string
    count: number
  }

  export type MealEntryCreateOrConnectWithoutMemberInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput>
  }

  export type MealEntryCreateManyMemberInputEnvelope = {
    data: MealEntryCreateManyMemberInput | MealEntryCreateManyMemberInput[]
  }

  export type ExpenseCreateWithoutMemberInput = {
    id?: string
    category: string
    amount: number
    household: HouseholdCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutMemberInput = {
    id?: string
    householdId: string
    category: string
    amount: number
  }

  export type ExpenseCreateOrConnectWithoutMemberInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput>
  }

  export type ExpenseCreateManyMemberInputEnvelope = {
    data: ExpenseCreateManyMemberInput | ExpenseCreateManyMemberInput[]
  }

  export type OverrideCreateWithoutMemberInput = {
    id?: string
    utilities?: number | null
    mealRate?: number | null
    household: HouseholdCreateNestedOneWithoutOverridesInput
  }

  export type OverrideUncheckedCreateWithoutMemberInput = {
    id?: string
    householdId: string
    utilities?: number | null
    mealRate?: number | null
  }

  export type OverrideCreateOrConnectWithoutMemberInput = {
    where: OverrideWhereUniqueInput
    create: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
  }

  export type HouseholdUpsertWithoutMembersInput = {
    update: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutMembersInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type HouseholdUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: MealDayUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: MealDayUncheckedUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUncheckedUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type MealEntryUpsertWithWhereUniqueWithoutMemberInput = {
    where: MealEntryWhereUniqueInput
    update: XOR<MealEntryUpdateWithoutMemberInput, MealEntryUncheckedUpdateWithoutMemberInput>
    create: XOR<MealEntryCreateWithoutMemberInput, MealEntryUncheckedCreateWithoutMemberInput>
  }

  export type MealEntryUpdateWithWhereUniqueWithoutMemberInput = {
    where: MealEntryWhereUniqueInput
    data: XOR<MealEntryUpdateWithoutMemberInput, MealEntryUncheckedUpdateWithoutMemberInput>
  }

  export type MealEntryUpdateManyWithWhereWithoutMemberInput = {
    where: MealEntryScalarWhereInput
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyWithoutMemberInput>
  }

  export type MealEntryScalarWhereInput = {
    AND?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    OR?: MealEntryScalarWhereInput[]
    NOT?: MealEntryScalarWhereInput | MealEntryScalarWhereInput[]
    id?: StringFilter<"MealEntry"> | string
    dayId?: StringFilter<"MealEntry"> | string
    memberId?: StringFilter<"MealEntry"> | string
    count?: IntFilter<"MealEntry"> | number
  }

  export type ExpenseUpsertWithWhereUniqueWithoutMemberInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutMemberInput, ExpenseUncheckedUpdateWithoutMemberInput>
    create: XOR<ExpenseCreateWithoutMemberInput, ExpenseUncheckedCreateWithoutMemberInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutMemberInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutMemberInput, ExpenseUncheckedUpdateWithoutMemberInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutMemberInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutMemberInput>
  }

  export type OverrideUpsertWithoutMemberInput = {
    update: XOR<OverrideUpdateWithoutMemberInput, OverrideUncheckedUpdateWithoutMemberInput>
    create: XOR<OverrideCreateWithoutMemberInput, OverrideUncheckedCreateWithoutMemberInput>
    where?: OverrideWhereInput
  }

  export type OverrideUpdateToOneWithWhereWithoutMemberInput = {
    where?: OverrideWhereInput
    data: XOR<OverrideUpdateWithoutMemberInput, OverrideUncheckedUpdateWithoutMemberInput>
  }

  export type OverrideUpdateWithoutMemberInput = {
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
    household?: HouseholdUpdateOneRequiredWithoutOverridesNestedInput
  }

  export type OverrideUncheckedUpdateWithoutMemberInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HouseholdCreateWithoutDaysInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutDaysInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityUncheckedCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutDaysInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutDaysInput, HouseholdUncheckedCreateWithoutDaysInput>
  }

  export type MealEntryCreateWithoutDayInput = {
    id?: string
    count: number
    member: MemberCreateNestedOneWithoutMealsInput
  }

  export type MealEntryUncheckedCreateWithoutDayInput = {
    id?: string
    memberId: string
    count: number
  }

  export type MealEntryCreateOrConnectWithoutDayInput = {
    where: MealEntryWhereUniqueInput
    create: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput>
  }

  export type MealEntryCreateManyDayInputEnvelope = {
    data: MealEntryCreateManyDayInput | MealEntryCreateManyDayInput[]
  }

  export type HouseholdUpsertWithoutDaysInput = {
    update: XOR<HouseholdUpdateWithoutDaysInput, HouseholdUncheckedUpdateWithoutDaysInput>
    create: XOR<HouseholdCreateWithoutDaysInput, HouseholdUncheckedCreateWithoutDaysInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutDaysInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutDaysInput, HouseholdUncheckedUpdateWithoutDaysInput>
  }

  export type HouseholdUpdateWithoutDaysInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutDaysInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUncheckedUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type MealEntryUpsertWithWhereUniqueWithoutDayInput = {
    where: MealEntryWhereUniqueInput
    update: XOR<MealEntryUpdateWithoutDayInput, MealEntryUncheckedUpdateWithoutDayInput>
    create: XOR<MealEntryCreateWithoutDayInput, MealEntryUncheckedCreateWithoutDayInput>
  }

  export type MealEntryUpdateWithWhereUniqueWithoutDayInput = {
    where: MealEntryWhereUniqueInput
    data: XOR<MealEntryUpdateWithoutDayInput, MealEntryUncheckedUpdateWithoutDayInput>
  }

  export type MealEntryUpdateManyWithWhereWithoutDayInput = {
    where: MealEntryScalarWhereInput
    data: XOR<MealEntryUpdateManyMutationInput, MealEntryUncheckedUpdateManyWithoutDayInput>
  }

  export type MealDayCreateWithoutEntriesInput = {
    id?: string
    date: string
    label: string
    household: HouseholdCreateNestedOneWithoutDaysInput
  }

  export type MealDayUncheckedCreateWithoutEntriesInput = {
    id?: string
    householdId: string
    date: string
    label: string
  }

  export type MealDayCreateOrConnectWithoutEntriesInput = {
    where: MealDayWhereUniqueInput
    create: XOR<MealDayCreateWithoutEntriesInput, MealDayUncheckedCreateWithoutEntriesInput>
  }

  export type MemberCreateWithoutMealsInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    household: HouseholdCreateNestedOneWithoutMembersInput
    expenses?: ExpenseCreateNestedManyWithoutMemberInput
    override?: OverrideCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMealsInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutMemberInput
    override?: OverrideUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMealsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMealsInput, MemberUncheckedCreateWithoutMealsInput>
  }

  export type MealDayUpsertWithoutEntriesInput = {
    update: XOR<MealDayUpdateWithoutEntriesInput, MealDayUncheckedUpdateWithoutEntriesInput>
    create: XOR<MealDayCreateWithoutEntriesInput, MealDayUncheckedCreateWithoutEntriesInput>
    where?: MealDayWhereInput
  }

  export type MealDayUpdateToOneWithWhereWithoutEntriesInput = {
    where?: MealDayWhereInput
    data: XOR<MealDayUpdateWithoutEntriesInput, MealDayUncheckedUpdateWithoutEntriesInput>
  }

  export type MealDayUpdateWithoutEntriesInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutDaysNestedInput
  }

  export type MealDayUncheckedUpdateWithoutEntriesInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUpsertWithoutMealsInput = {
    update: XOR<MemberUpdateWithoutMealsInput, MemberUncheckedUpdateWithoutMealsInput>
    create: XOR<MemberCreateWithoutMealsInput, MemberUncheckedCreateWithoutMealsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMealsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMealsInput, MemberUncheckedUpdateWithoutMealsInput>
  }

  export type MemberUpdateWithoutMealsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    expenses?: ExpenseUpdateManyWithoutMemberNestedInput
    override?: OverrideUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMealsInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    expenses?: ExpenseUncheckedUpdateManyWithoutMemberNestedInput
    override?: OverrideUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type HouseholdCreateWithoutExpensesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutHouseholdInput
    days?: MealDayCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutHouseholdInput
    days?: MealDayUncheckedCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityUncheckedCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutExpensesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutExpensesInput, HouseholdUncheckedCreateWithoutExpensesInput>
  }

  export type MemberCreateWithoutExpensesInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    household: HouseholdCreateNestedOneWithoutMembersInput
    meals?: MealEntryCreateNestedManyWithoutMemberInput
    override?: OverrideCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutExpensesInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
    meals?: MealEntryUncheckedCreateNestedManyWithoutMemberInput
    override?: OverrideUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutExpensesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutExpensesInput, MemberUncheckedCreateWithoutExpensesInput>
  }

  export type HouseholdUpsertWithoutExpensesInput = {
    update: XOR<HouseholdUpdateWithoutExpensesInput, HouseholdUncheckedUpdateWithoutExpensesInput>
    create: XOR<HouseholdCreateWithoutExpensesInput, HouseholdUncheckedCreateWithoutExpensesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutExpensesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutExpensesInput, HouseholdUncheckedUpdateWithoutExpensesInput>
  }

  export type HouseholdUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUncheckedUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUncheckedUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type MemberUpsertWithoutExpensesInput = {
    update: XOR<MemberUpdateWithoutExpensesInput, MemberUncheckedUpdateWithoutExpensesInput>
    create: XOR<MemberCreateWithoutExpensesInput, MemberUncheckedCreateWithoutExpensesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutExpensesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutExpensesInput, MemberUncheckedUpdateWithoutExpensesInput>
  }

  export type MemberUpdateWithoutExpensesInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    meals?: MealEntryUpdateManyWithoutMemberNestedInput
    override?: OverrideUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutExpensesInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    meals?: MealEntryUncheckedUpdateManyWithoutMemberNestedInput
    override?: OverrideUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type HouseholdCreateWithoutUtilitiesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutHouseholdInput
    days?: MealDayCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutUtilitiesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutHouseholdInput
    days?: MealDayUncheckedCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseholdInput
    overrides?: OverrideUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutUtilitiesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutUtilitiesInput, HouseholdUncheckedCreateWithoutUtilitiesInput>
  }

  export type HouseholdUpsertWithoutUtilitiesInput = {
    update: XOR<HouseholdUpdateWithoutUtilitiesInput, HouseholdUncheckedUpdateWithoutUtilitiesInput>
    create: XOR<HouseholdCreateWithoutUtilitiesInput, HouseholdUncheckedCreateWithoutUtilitiesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutUtilitiesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutUtilitiesInput, HouseholdUncheckedUpdateWithoutUtilitiesInput>
  }

  export type HouseholdUpdateWithoutUtilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutUtilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUncheckedUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput
    overrides?: OverrideUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateWithoutOverridesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutHouseholdInput
    days?: MealDayCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutOverridesInput = {
    id?: string
    name: string
    monthKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutHouseholdInput
    days?: MealDayUncheckedCreateNestedManyWithoutHouseholdInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseholdInput
    utilities?: UtilityUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutOverridesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutOverridesInput, HouseholdUncheckedCreateWithoutOverridesInput>
  }

  export type MemberCreateWithoutOverrideInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
    household: HouseholdCreateNestedOneWithoutMembersInput
    meals?: MealEntryCreateNestedManyWithoutMemberInput
    expenses?: ExpenseCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutOverrideInput = {
    id?: string
    householdId: string
    externalId: string
    name: string
    initials: string
    color: string
    meals?: MealEntryUncheckedCreateNestedManyWithoutMemberInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutOverrideInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutOverrideInput, MemberUncheckedCreateWithoutOverrideInput>
  }

  export type HouseholdUpsertWithoutOverridesInput = {
    update: XOR<HouseholdUpdateWithoutOverridesInput, HouseholdUncheckedUpdateWithoutOverridesInput>
    create: XOR<HouseholdCreateWithoutOverridesInput, HouseholdUncheckedCreateWithoutOverridesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutOverridesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutOverridesInput, HouseholdUncheckedUpdateWithoutOverridesInput>
  }

  export type HouseholdUpdateWithoutOverridesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutOverridesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutHouseholdNestedInput
    days?: MealDayUncheckedUpdateManyWithoutHouseholdNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseholdNestedInput
    utilities?: UtilityUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type MemberUpsertWithoutOverrideInput = {
    update: XOR<MemberUpdateWithoutOverrideInput, MemberUncheckedUpdateWithoutOverrideInput>
    create: XOR<MemberCreateWithoutOverrideInput, MemberUncheckedCreateWithoutOverrideInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutOverrideInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutOverrideInput, MemberUncheckedUpdateWithoutOverrideInput>
  }

  export type MemberUpdateWithoutOverrideInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    meals?: MealEntryUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutOverrideInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    meals?: MealEntryUncheckedUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyHouseholdInput = {
    id?: string
    externalId: string
    name: string
    initials: string
    color: string
  }

  export type MealDayCreateManyHouseholdInput = {
    id?: string
    date: string
    label: string
  }

  export type ExpenseCreateManyHouseholdInput = {
    id?: string
    memberId: string
    category: string
    amount: number
  }

  export type UtilityCreateManyHouseholdInput = {
    id?: string
    externalId: string
    name: string
    amount: number
  }

  export type OverrideCreateManyHouseholdInput = {
    id?: string
    memberId: string
    utilities?: number | null
    mealRate?: number | null
  }

  export type MemberUpdateWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    meals?: MealEntryUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUpdateManyWithoutMemberNestedInput
    override?: OverrideUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    meals?: MealEntryUncheckedUpdateManyWithoutMemberNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutMemberNestedInput
    override?: OverrideUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    initials?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type MealDayUpdateWithoutHouseholdInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    entries?: MealEntryUpdateManyWithoutDayNestedInput
  }

  export type MealDayUncheckedUpdateWithoutHouseholdInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    entries?: MealEntryUncheckedUpdateManyWithoutDayNestedInput
  }

  export type MealDayUncheckedUpdateManyWithoutHouseholdInput = {
    date?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUpdateWithoutHouseholdInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    member?: MemberUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutHouseholdInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseUncheckedUpdateManyWithoutHouseholdInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityUpdateWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityUncheckedUpdateWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilityUncheckedUpdateManyWithoutHouseholdInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type OverrideUpdateWithoutHouseholdInput = {
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
    member?: MemberUpdateOneRequiredWithoutOverrideNestedInput
  }

  export type OverrideUncheckedUpdateWithoutHouseholdInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OverrideUncheckedUpdateManyWithoutHouseholdInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    utilities?: NullableFloatFieldUpdateOperationsInput | number | null
    mealRate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MealEntryCreateManyMemberInput = {
    id?: string
    dayId: string
    count: number
  }

  export type ExpenseCreateManyMemberInput = {
    id?: string
    householdId: string
    category: string
    amount: number
  }

  export type MealEntryUpdateWithoutMemberInput = {
    count?: IntFieldUpdateOperationsInput | number
    day?: MealDayUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutMemberInput = {
    dayId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MealEntryUncheckedUpdateManyWithoutMemberInput = {
    dayId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseUpdateWithoutMemberInput = {
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    household?: HouseholdUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutMemberInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type ExpenseUncheckedUpdateManyWithoutMemberInput = {
    householdId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type MealEntryCreateManyDayInput = {
    id?: string
    memberId: string
    count: number
  }

  export type MealEntryUpdateWithoutDayInput = {
    count?: IntFieldUpdateOperationsInput | number
    member?: MemberUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealEntryUncheckedUpdateWithoutDayInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type MealEntryUncheckedUpdateManyWithoutDayInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}