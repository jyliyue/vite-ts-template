export default function deepClone(obj: any) {
    if (typeof obj !== 'object') return obj
    const newObj: any = obj instanceof Array ? [] : {}
    for (const key in obj) {
        newObj[key] = deepClone(obj[key])
    }
    return newObj
}
