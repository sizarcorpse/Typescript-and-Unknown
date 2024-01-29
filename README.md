# TypeScript

## Table of Contents

- [TypeScript](#typescript)
  - [Table of Contents](#table-of-contents)
  - [Primitive Data Types](#primitive-data-types)
  - [`type` Aliases](#type-aliases)
  - [Literal Types](#literal-types)
    - [Literal Types For Returns](#literal-types-for-returns)
  - [Index Signatures](#index-signatures)
  - [`typeof` Operator](#typeof-operator)
  - [Indexed Types](#indexed-types)
  - [`keyof` Operator](#keyof-operator)
  - [Generic Type Arguments](#generic-type-arguments)
    - [Multiple Generic Arguments](#multiple-generic-arguments)

## Primitive Data Types

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`
- `object`
- `never`
- `any`
- `unknown`

```typescript
let a: number = 1;
let b: string = "hello";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol("foo");
let g: bigint = 100n;
let h: object = { foo: "bar" };
let i: never = (() => {
  throw new Error("error");
})();
let j: any = 1;
let k: unknown = 1;

// example
a = 2; // ok
a = "hello"; // error
b = "world"; // ok
b = 2; // error
c = true; // ok
c = false; // ok
d = null; // ok
d = undefined; // error
e = undefined; // ok
e = null; // error
f = Symbol("foo"); // ok
f = Symbol("bar"); // ok
g = 100n; // ok
g = 100; // error
h = { foo: "bar" }; // ok
h = { bar: "foo" }; // ok
```

## `type` Aliases

✨ In TypeScript, a type alias is a way to give a new name to a type. It's like creating a new identifier that you can use in place of an existing type.

⚒️ `type` aliases are used when you want to avoid typing long type annotations, encapsulate complex types into a single identifier, or create more meaningful and readable code. They are particularly useful when working with complex types that are used repeatedly throughout your code.

💡`type` aliases help to make your code more readable and maintainable. They allow you to encapsulate complex types into a single identifier, which can make your code easier to understand. They also help to reduce redundancy in your code by allowing you to define a type once and then reuse it throughout your code

```typescript
// Primitive type
type ID = string;
type Name = string;

// Complex type
type User = {
  id: ID;
  name: Name;
  email: string;
};

// Union type
type WindowStates = "open" | "closed" | "minimized";

// Function type
type Callback = (error: Error, response: object) => void;

// Generic type
type Container<T> = { value: T };
```

## Literal Types

✨ In TypeScript, a literal type is a type that represents exactly one value. For example, the literal type `"hello"` only represents the string `"hello"`. Similarly, `2` is a numeric literal type that only represents the number `2`. Literal types are often used in conjunction with union types to describe a value that can be a set of specific strings or numbers.

⚒️ Literal types are used when you want to restrict a value to a specific set of possibilities. They are often used in situations where a variable can only take on a limited number of known values.

💡Literal types help to make your code more type-safe by restricting the possible values a variable can take. This can help to catch potential bugs at compile-time rather than at runtime.

```typescript
// String literal type
type Direction = "north" | "east" | "south" | "west";

// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean literal type
type HasSides = true;
```

```typescript
function move(distance: number, direction: Direction) {
  console.log(`Moving ${distance} meters ${direction}`);
}

move(10, "north"); // ok
move(10, "down"); // error
```

### Literal Types For Returns

✨ Literal Types For Returns refers to the practice of using literal types as the return type of a function. This means that the function is expected to return a specific, singular value.

```typescript
type Direction = "north" | "south" | "east" | "west";

function getDirection(): Direction {
  return "north";
}
```

```typescript
type LiteralFunction = (a: number, b: number) => number;

const add: LiteralFunction = (a, b) => a + b;
```

## Index Signatures

✨ In TypeScript, an index signature is a way to define a type that allows for any property name on an object to be used as a key to access a property value. It's a way to describe types of objects that are not known at design time.

⚒️ Index signatures are used when you want to create objects that have some set of properties that are not known until runtime. They are often used when working with objects that act as dictionaries or maps.

💡 Index signatures provide a way to define the type of an object that can have any number of properties of a certain type. Without index signatures, it would be difficult to describe the types of these kinds of objects in TypeScript.

- String Index Signature: `type StringIndexSignature = { [key: string]: string };`

  ```typescript
  type StringIndexSignature = { [key: string]: string };

  const obj: StringIndexSignature = {
    name: "John",
    age: "30",
    city: "New York",
  };
  ```

- Number Index Signature: `type NumberIndexSignature = { [key: number]: string };`

  ```typescript
  type NumberIndexSignature = { [key: number]: string };

  const obj: NumberIndexSignature = {
    0: "Sizar",
    1: "30",
    2: "New York",
  };
  ```

- Mixed Index Signature: `type MixedIndexSignature = { [key: string]: string | number };`

  ```typescript
  type MixedIndexSignature = { [key: string]: string | number };

  const obj: MixedIndexSignature = {
    name: "Sizar",
    age: 30,
    city: "New York",
  };
  ```

- Index Signature for Function Return Types : `type FunctionIndexSignature = { [key: string]: () => string };`

  ```typescript
  type FunctionIndexSignature = { [key: string]: () => string };

  const obj: FunctionIndexSignature = {
    name: () => "Sizar",
    age: () => "30",
    city: () => "New York",
  };
  ```

- Index Signature with readonly Modifier: `type ReadonlyIndexSignature = { readonly [key: string]: string };`

  ```typescript
  type ReadonlyIndexSignature = { readonly [key: string]: string };

  const obj: ReadonlyIndexSignature = {
    name: "Sizar",
    age: "30",
    city: "New York",
  };

  obj.name = "Jane"; // error
  ```

## `typeof` Operator

✨ The `typeof` operator is a unary operator that returns a string indicating the type of the unevaluated operand. In JavaScript, it can return "`number`", "`string`", "`boolean`", "`undefined`", "`function`", "`object`", "`symbol`", or "`bigint`". In TypeScript, `typeof` can also be used as a type query operator to obtain the type of a variable, property, or other value.

⚒️ The `typeof` operator helps to make your code more robust by allowing you to check the type of a variable before performing operations on it. In TypeScript, it allows you to create types based on the types of existing variables, which can help to reduce redundancy and improve type safety.

- Person Type Alias: If you have a `person` object, you can create a `Person` type that has the same structure as the person object.

  ```typescript
  const person = {
    name: "Sizar",
    age: 30,
  };

  type Person = typeof person;

  const person_x: Person = {
    name: "Sizar",
    age: 30,
    motto: "Hello World", // error
  };
  ```

- Function Type Alias: If you have a `log` function, you can create a `Log` type that has the same structure as the log function.

  ```typescript
  const log = (message: string) => {
    console.log(message);
  };

  type Log = typeof log;

  const log_x: Log = (message: string) => {
    console.log(message);
    console.log(message);
  };
  ```

- Enum Type Alias: If you have a `Direction` enum, you can create a `DirectionType` type that has the same structure as the `Direction` enum.

  ```typescript
  enum Direction {
    North,
    South,
    East,
    West,
  }

  type DirectionType = typeof Direction;

  const direction: DirectionType = {
    North: 0,
    South: 1,
    East: 2,
    West: 3,
  };
  ```

## Indexed Types

✨ In TypeScript, indexed types (also known as indexed access types or lookup types) allow you to get the type of a property at a specific index of a type. This is particularly useful when working with tuple or array types, or types with a known set of properties.

⚒️ Indexed types are used when you want to get the type of a property at a specific index of a type. They are often used when working with tuple or array types, or types with a known set of properties.

💡 Indexed types help to make your code more type-safe by allowing you to get the type of a property at a specific index of a type. This can help to catch potential bugs at compile-time rather than at runtime.

- Accessing Tuple Types: `type First = [string, number][0];`

  ```typescript
  type TupleType = [string, number, boolean];
  type First = TupleType[0];

  const first: First = "Sizar";
  ```

- Accessing Array Types: `type First = string[];`

  ```typescript
  type First = string[];
  const first: First = ["Sizar", "30"];

  type ArrayType = number[];
  type ElementType = ArrayType[number];
  ```

- Accessing Object Property Types: `type First = { name: string }["name"];`

  ```typescript
  type First = { name: string }["name"];
  const first: First = "Sizar";

  type ObjectType = { name: string; age: number };
  type NameType = ObjectType["name"]; // string
  ```

- Using with `keyof`: `type First = keyof { name: string };` You can use indexed types to access the type of a specific property of an object type.

  ```typescript
  type First = keyof { name: string };
  const first: First = "name";

  type ObjectType = { name: string; age: number };
  type AnyPropertyType = ObjectType[keyof ObjectType]; // string | number
  ```

- Using with `typeof`: `type First = typeof person["name"];`

  ```typescript
  const person = {
    name: "Sizar",
    age: 30,
  };

  type First = (typeof person)["name"];
  const first: First = "Sizar";
  ```

## `keyof` Operator

✨ The `keyof` operator in TypeScript is a type operator that produces a string or numeric literal union of the keys of an object type. It's used to capture the property names of an object type as a literal union type.

⚒️ `keyof` is used when you want to create a type that represents the keys of another type. It's often used in conjunction with indexed types to create types that are based on the properties of existing types.

- Creating Key Types: `type Keys = keyof { name: string; age: number };`

  ```typescript
  type Keys = keyof { name: string; age: number };
  const keys: Keys = "name";
  ```

- Object Property Type Alias: This is a `keyof` type used with an indexed type to get the type of a specific property of an object type.

  ```typescript
  type ObjectType = { name: string; age: number };
  type NameType = ObjectType[keyof ObjectType]; // string | number
  ```

- Function Property Keys Type Alias: This is a `keyof` type that gets the keys of a function's properties.

  ```typescript
  type FunctionProperties = keyof Function; // "apply" | "arguments" | "bind" | "call" | "caller" | "length" | "name" | "toString" | "prototype"
  ```

## Generic Type Arguments

✨ In TypeScript, generic type arguments allow you to write reusable code that can work over a variety of types, rather than a single one. They are a way of defining functions, classes, or interfaces that can operate on different types, while still maintaining type safety.

⚒️ Generic type arguments are used when you want to create reusable components that can work with any type, but still maintain type safety. They are often used in functions, classes, and interfaces.

🧵 The syntax for generic type arguments involves using angled brackets (`<` and `>`). Inside these brackets, you place a placeholder type (often `T` by convention, but it can be any valid identifier). This placeholder type can then be used as a type within the function, class, or interface.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

- Naming: While `T` is a common placeholder name, you can use any valid identifier. If your generic takes multiple type arguments, it's common to use `T`, `U`, `V`, etc.

- Using Multiple Type Variables: You can use multiple type variables in a generic to work with functions or methods that take two or more arguments of different types.

  ```typescript
  function identity<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
  }
  ```

- Using Type Constraints: You can use type constraints in a generic to restrict the types that can be used with it. This is done by using the `extends` keyword.

  ```typescript
  function identity<T extends string>(arg: T): T {
    return arg;
  }
  ```

```typescript
const data = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 24,
  },
];

type Status = "ok" | "error" | "unauthorized" | "unauthenticated";
type Count = number;

const createResponse = <T>(status: Status, data: T, count: Count) => {
  return {
    status,
    data,
    count,
  };
};

const response = createResponse("unauthenticated", data, data.length);
```

### Multiple Generic Arguments

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result = pair<string, number>("apple", 10);
```
