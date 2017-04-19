/**
 * Created by thram on 19/04/17.
 */
// export const curry = fn => (...args) => fn.bind(null, ...args);
export const curry = fn => (...args1) => (
  args1.length === fn.length ? fn(...args1) : (...args2) => {
    const args = [...args1, ...args2];
    return args.length >= fn.length ? fn(...args) : curry(fn)(...args);
  }
);
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
