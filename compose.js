function compose(...funcs) {
    return function (...args) {
        if (funcs.length === 0) return args;
        if (funcs.length === 1) return funcs[0](...args);

        return funcs.reduce((n, fn) => {
            return n instanceof Array ? fn(...n) : fn(n);
        }, args);
    };
}

const fn1 = (x, y) => x + y + 10;
const fn2 = x => x - 10;
const fn3 = x => x * 10;
const fn4 = x => x / 10;

let res = compose(fn1, fn3, fn2, fn4)(20, 30);
console.log(res);
