export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
    func: F,
    delay: number
): (...args: Parameters<F>) => void {
    console.log(func);
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}