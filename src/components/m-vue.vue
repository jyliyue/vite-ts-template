<script setup lang="ts">
import { observe } from '../test/mvue'

const data = {
    name: 'ly',
    sex: '男'
}
console.log(data.name)
observe(data)

data.name = 'test'
console.log(data.name)
</script>

<template>
    <div class="box">m-vue</div>
</template>

<style scoped></style>
