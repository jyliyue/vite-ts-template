export class ajax {
    static get = (url: string, fn: Function) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                fn.call(this, xhr.responseText)
            }
        }
        xhr.send()
    }
}
