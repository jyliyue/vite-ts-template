export default class mvue {
    $data: any = ''
    constructor(option: any) {
        this.$data = option.data
    }

    static observer = (data: any) => {
        // console.log(data)
    }
}
