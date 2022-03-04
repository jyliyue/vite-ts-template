console.log(11)

export default class Debounced {
    static use(fn: Function, wait: number = 1000) {
        let timer: any = null
        return (...args: any) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait)
        }
    }
}
