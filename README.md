# RxJS Utils
[![npm (scoped)](https://img.shields.io/npm/v/@mjamsek/rxjs-utils)](https://www.npmjs.com/package/@mjamsek/rxjs-utils)
[![GitHub license](https://img.shields.io/github/license/Jamsek-m/prog-lib-rxjs)](https://github.com/Jamsek-m/prog-lib-rxjs/blob/master/LICENSE)
> Utility library providing RxJS operators.

## Installation

Run command: `npm install --save @mjamsek/rxjs-utils`

## Documentation

### Type assertions

#### Assert type

`assertType<T>()` asserts observable is of type `T`. Usage:

```typescript
observable$.pipe(
    assertType<string>(),
);
```

#### Assert void

`assertVoid()` asserts observable is of type `void`. Usage:

```typescript
observable$.pipe(
    assertVoid(),
);
```

#### Enforce type

`enforceType<T>()` runs a type guard check on observable to enforce it is of type `T`. Usage:

```typescript
function isString(x: unknown): x is string {
    return typeof x === "string";
}

observable$.pipe(
    enforceType<string>(isString),
);
```

You can also create reusable enforcers, by using `createTypeEnforcer` function:

```typescript
const enforceString = createTypeEnforcer(isString);

observable$.pipe(
    enforceString(),
);
```

## Bugs & Features

Any issues, requests for a new feature, etc. can be filled using [GitHub Issues](https://github.com/Jamsek-m/prog-lib-rxjs/issues).

## License

MIT
