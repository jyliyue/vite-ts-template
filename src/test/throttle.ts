export default class Throttle {
    static use(fn: Function, wait: number = 1000) {
        let timer: any = null
        return (...args: any) => {
            if (!timer) {
                fn.apply(this, args)
                timer = setTimeout(() => {
                    timer && clearTimeout(timer)
                    timer = null
                }, wait)
            }
        }
    }
}
