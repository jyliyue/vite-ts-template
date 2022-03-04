<script setup lang="ts">
import { ref } from 'vue'
import Debounced from '../test/debounce'
import Throttle from '../test/throttle'
import Ajax from '../test/ajax'
defineProps<{ msg: string }>()

const count = ref(0)
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
</script>

<template>
    <h1>{{ msg }}</h1>
    <el-button @click="debounce(1)">debounce</el-button>
    <el-button @click="throttle(2)">throttle</el-button>
    <el-button @click="get">get</el-button>
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
