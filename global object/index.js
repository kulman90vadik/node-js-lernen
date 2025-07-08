// console.log(global); // глобальные данные как window в js 

// console.log(__dirname); // получаем путь до папки   C:\Users\Schommi\Desktop\r-Screenshot\node-js-lernen\global object

// console.log(__filename); // получаем путь до файла   C:\Users\Schommi\Desktop\r-Screenshot\node-js-lernen\global object\index.js

// console.log(process); // много всего например .env

// console.log(`Hello, ${process.argv[2]}`); // вызов с аргументом node index.js Vadim

const url = new URL('https://google.com/path/name/#id')
console.log(url.hostname); // google.com
console.log(url.href); // https://google.com/path/name/#id
console.log(url.pathname); // /path/name/
console.log(url.hash); // #id


// module

const { user, hihi } = require('./test')

console.log(user, hihi('Jon'))


