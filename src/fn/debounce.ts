export default class debounce {
    static use = (fn: Function, wait: number = 1000) => {
        let timer: any = null
        return (...args: any) => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait)
        }
    }
}
