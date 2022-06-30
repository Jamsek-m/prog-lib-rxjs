import { map, Observable, of } from "rxjs";
import { TypeGuardFunc } from "./types";

/**
 * Asserts observable type is of type <code>T</code>.
 */
export function assertType<T>() {
    return function <I>(source: Observable<I>): Observable<T> {
        return source.pipe(
            map((val: I) => val as unknown as T)
        );
    };
}

/**
 * Asserts observable type is of type <code>void</code>.
 */
export function assertVoid() {
    return function <T>(source: Observable<T>): Observable<void> {
        return source.pipe(
            map(() => undefined)
        );
    };
}

/**
 * Enforces that given value passes given type guard checks and throws error otherwise
 * @param guard type guard function for given type
 * @throws {TypeError} if value does not pass type guard checks
 */
export function enforceType<T>(guard: TypeGuardFunc<T>) {
    return function <I>(source: Observable<I>): Observable<T> {
        return source.pipe(
            map((value: I) => {
                if (guard(value)) {
                    return value;
                }
                throw new TypeError("Given value is not of required type!");
            }),
        );
    };
}

/**
 * Creates reusable type-enforcing operator
 * @param guard type guard function for given type
 */
export function createTypeEnforcer<T>(guard: TypeGuardFunc<T>) {
    return () => {
        return enforceType(guard);
    };
}
