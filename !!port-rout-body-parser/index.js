require('dotenv').config()
const bodyParser = require('body-parser')


const express = require('express')
const app = express()


const articles = [
    {"title": 'Html5'},
    {"title": 'Css3'},
    {"title": 'js'}
]

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))





app.get('/articles', (req, res, next) => { res.send(articles) })
app.get('/articles/:id', (req, res, next) => { 
    const id = req.params.id
    console.log('Fetching: ', id)
    res.send(articles[id])
 })
app.delete('/articles/:id', (req, res, next) => { 
    const id = req.params.id
    console.log('Delete: ', id)
    delete articles[id]
    res.send({message: 'Deleted'})
 })



app.post('/articles', (req, res, next) => { 
    const article = {title: req.body.title}    
    articles.push(article)
    res.send(article) 
})




app.listen(app.get('port'), () => {
    console.log('Express web app on http://localhost:%s', app.get('port'));
})
 

module.exports = app


// curl --data "title=ts" http://localhost:8080/articles ----- в BASH  МОЖНО ТАК ДОБАВИТЬ ПОСТ ПО ПУТИ POST
// curl http://localhost:8080/articles ----- в BASH МОЖНО ПОЛУЧИТЬ ВСЕ ПОСТЫ
// curl -X DELETE http://localhost:8080/articles/0 ----- в BASH МОЖНО УДАЛИТЬ РОСТ