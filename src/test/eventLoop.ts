// import { nextTick } from 'vue'

// console.log('1') // => 1
// async function async1() {
//     console.log('2') // => 2
//     await async2() // => mirco-2
//     console.log('3') // => 7
// }
// async function async2() {
//     console.log('4') // => 6
// }

// nextTick(function () {
//     console.log('5') // => micro-1 => 5
// })

// // => marco-1
// setTimeout(function () {
//     console.log('6') // => 9
//     nextTick(function () {
//         console.log('7') // => micro-4 => 11
//     })
//     new Promise(function (resolve) {
//         console.log('8') // => 10
//         resolve(null)
//     }).then(function () {
//         console.log('9') // => micro-5 => 12
//     })
// })

// async1()

// new Promise(function (resolve) {
//     console.log('10') // => 3
//     resolve(null)
// }).then(function () {
//     console.log('11') // => mirco-3 => 8
// })
// console.log('12') // => 4

// async function async1() {
//     console.log('async1 start') // => 1
//     await async2()
//     console.log('async1 end') // => mirco-1 => 4
// }

// async function async2() {
//     console.log('async2') // => 2
// }

// async1()

// new Promise((resolve) => {
//     console.log(1) // => 3
//     resolve(null)
// })
//     .then(() => {
//         console.log(2) // => micro-2 => 5
//     })
//     .then(() => {
//         console.log(3) // => micro-3 => 6
//     })
//     .then(() => {
//         console.log(4) // => micro-4 => 7
//     })

// async function async1() {
//     console.log('async1 start') // => 2
//     await async2()
//     // => mirco-1
//     console.log('async1 end') // => 6
// }
// async function async2() {
//     console.log('async2') // => 3
// }
// console.log('script start') // => 1

// // => macro-1
// setTimeout(function () {
//     console.log('settimeout') // => 8
// }, 0)

// async1()

// new Promise(function (resolve) {
//     console.log('promise1') // => 4
//     resolve(null)
// }).then(function () {
//     console.log('promise2') // => micro-2 => 7
// })
// console.log('script end') // => 5
