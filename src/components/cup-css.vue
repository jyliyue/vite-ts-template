<script setup lang="ts"></script>

<template>
    <div class="box">
        <div class="center">
            <div class="main">main</div>
        </div>
        <div class="left">left</div>
        <div class="right">right</div>
    </div>
</template>

<style scoped>
.center {
    float: left;
    width: 100%;
}
.main {
    margin-left: 50px;
    margin-right: 100px;
    background-color: yellow;
}
.left {
    float: left;
    width: 50px;
    background-color: aqua;
    margin-left: -100%;
}
.right {
    float: left;
    width: 100px;
    background-color: red;
    margin-left: -100px;
}
</style>
