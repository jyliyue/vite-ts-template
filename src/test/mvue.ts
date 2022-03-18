/**
 * @description: obsever 数据劫持（监听所有数据）
 */
export function observe(data: any) {
    if (!data || typeof data !== 'object') return

    Object.keys(data).forEach((key) => {
        // 利用数据劫持改写 get 和 set 方法
        hijack(data, key, data[key])
    })
}

function hijack(data: object, key: string, val: any) {
    const dep = new Dependence()
    Object.defineProperty(data, key, {
        get: () => {
            console.log('get:' + val)
            dep.notify()
            return val
        },
        set: (newVal) => {
            console.log('set:' + newVal)
            dep.notify()
            val = newVal
        }
    })
}

/**
 * @description: watcher 订阅者（建立数据和模版的关系）
 */

class Watcher {
    update() {}
}

// /**
//  * @description: Dep (依存 dependence) 管理员角色，统一通知所有订阅者
//  */
class Dependence {
    watchers: Array<Watcher>
    constructor() {
        this.watchers = []
    }

    addwatcher(watcher: Watcher) {
        this.watchers.push(watcher)
    }

    notify() {
        this.watchers.forEach((watcher) => {
            watcher.update()
        })
    }
}

/**
 * @description: complie 解析编译 （解析虚拟dom）
 */

// export default class mvue {
//     $data: any = ''
//     constructor(option: any) {
//         this.$data = option.data
//     }

//     static observer = (data: any) => {
//         // console.log(data)
//     }
// }
