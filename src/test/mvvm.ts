// observer 数据劫持 object.definePrototype
//

export default class mvvm {
    static observer = (data: any) => {
        Object.keys(data).forEach((key) => {
            proxy(key, data[key])
        })
        function proxy(key: any, val: any) {
            Object.defineProperty(data, key, {
                get: () => {
                    return val
                },
                set: (newVal) => {
                    val = newVal
                }
            })
        }
    }
}
