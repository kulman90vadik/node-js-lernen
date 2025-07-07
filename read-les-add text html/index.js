const http = require('http')
const fs = require('fs')
const port = 8000

http.createServer((req, res) => { // req -- запрос от клиента // res -- мы ему ответ отправляем из нашей функции
  getTitles(res)
}).listen(port, 'localhost', () => {
  console.log(`Сервер запущен: http://localhost:${port}`)
})


function getTitles(res) {
  fs.readFile('./titles.json', (err, data) => {
    if(err) { hadError(err, res)}
    else { getTemplate(JSON.parse(data.toString()), res)}
  })
}


function getTemplate(titles, res) {
  fs.readFile('./index.html', (err, data) => {
      if(err) { hadError(err, res)}
    else { formatHtml(titles, data.toString(), res)}
  })
}



function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace("%", titles.join('</li><li>'))
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(html)
}


function hadError(err, res) {
  console.log(err)
  res.end('Server Error')
}


// ------------------------------------------------------------------------------------- //

// EventEmitter — это класс, который позволяет создавать объект, способный регистрировать и вызывать события
// channel — это твой собственный объект-событие

const EventEmitter = require('events').EventEmitter
const channel = new EventEmitter()
function message() {
  console.log('Welc')
}
 // join ---- Я ПРИДУМАЛ !!!! 
channel.on('join', message); // «Когда произойдёт событие join, запусти функцию message()»
channel.emit('join'); // emit означает: вызови событие join, и все функции, которые его слушают (в данном случае message()), будут вызваны

// ------------------------------------------------------------------------------------- //

// const EventEmitter = require('events').EventEmitter;
// const serverEvents = new EventEmitter();

// // Обработчик события 'login'
// serverEvents.on('login', (username) => {
//   console.log(`Пользователь ${username} вошёл в систему`);
// });

// // Обработчик события 'message'
// serverEvents.on('message', (msg) => {
//   console.log(`Получено сообщение: ${msg}`);
// });

// // Симулируем, что кто-то вошёл
// serverEvents.emit('login', 'ivan');

// // Симулируем, что пришло сообщение
// serverEvents.emit('message', 'Привет от пользователя!');



// ------------------------- реавльное событие ---------------------------- //


// const http = require('http')
// const EventEmitter = require('events')

// const events = new EventEmitter()

// // Подписываемся на событие login
// events.on('login', (username) => {
//   console.log(`Пользователь вошёл: ${username}`)
// })

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url.startsWith('/login')) {
//     // Получаем имя из URL, например /login?user=Ivan
//     const url = new URL(req.url, `http://${req.headers.host}`)
//     const username = url.searchParams.get('user') || 'Гость'

//     // Событие login вызывается реально при запросе
//     events.emit('login', username)

//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end(`Добро пожаловать, ${username}!\n`)
//   } else {
//     res.writeHead(404)
//     res.end('Не найдено')
//   }
// })

// server.listen(3000, () => {
//   console.log('Сервер запущен: http://localhost:3000')
// })



