import { map } from "rxjs/operators";
import { Observable } from "rxjs/dist/types";

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
