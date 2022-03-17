<script setup lang="ts">
import Debounced from '../test/debounce'
import Throttle from '../test/throttle'
import Ajax from '../test/ajax'
import mvue from '../test/mvue'
import '../test/eventLoop'
defineProps<{ msg: string }>()

const debounce = Debounced.use(function (a: number) {
    console.log(a)
})
const throttle = Throttle.use(function (a: number) {
    console.log(a)
})

const url = 'https://www.fastmock.site/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list'
const get = function () {
    Ajax.get(url, (response: string) => {
        console.log(response)
    })
}

const data = {
    name: 'lily'
}
mvue.observer(data)
// console.log(data)
// 1-id,2-类，3-伪类，4-标签，5-属性，6-相邻，7-子选择器，8-后代， 9 - 通配符
// ！important>内联样式>id>类>标签>通配符>继承>浏览器默认
</script>

<template>
    <div class="trangle"></div>
    <h1>{{ msg }}</h1>
    <el-button @click="debounce(1)">debounce</el-button>
    <el-button @click="throttle(2)">throttle</el-button>
    <el-button @click="get">get</el-button>
    <div id="id">
        <div class="class">
            <div rel="bold">1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
</template>

<style scoped>
/* 1 - id 选择器 */
#id {
    margin-top: 10px;
    padding: 10px;
    background-color: aliceblue;
}
/* 2 - 类选择器 */
.class {
    padding: 10px;
    background-color: aquamarine;
}
/* 3 - 属性选择器 */
#id div[rel='bold'] {
    font-size: 32px;
    font-weight: bold;
}
.class div:first-child {
    font-size: 12px;
}
/* 4 - 伪类选择器 */
.class div:last-child {
    color: red;
}
/* 5 - 标签选择器 */
div {
    border: 1px solid #000;
}
/* 6 - 相邻选择器 */
.class div:first-child + div {
    color: yellow;
}
/* 7 - 子选择器 */
.class > div {
    margin-bottom: 10px;
}
/* 8 - 后代选择器 */
#id div {
    border-radius: 10px;
}
/* 9 - 通配符选择器 */
* {
    color: #000;
}

.trangle {
    width: 0;
    height: 0;
    border-top: 10px solid #000;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
</style>
