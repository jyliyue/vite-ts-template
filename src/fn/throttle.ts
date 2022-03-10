export default class throttle {
    static use = (fn: Function, wait: number = 1000) => {
        let timer: any = null
        return (...args: any) => {
            if (!timer) {
                fn.apply(this, args)
                timer = setTimeout(() => {
                    clearTimeout(timer)
                    timer = null
                }, 1000)
            }
        }
    }
}
