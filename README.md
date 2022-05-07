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

## Bugs & Features

Any issues, requests for a new feature, etc. can be filled using [GitHub Issues](https://github.com/Jamsek-m/ts-prog-utils/issues).

## License

MIT
