require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const Article = require("./db").Article;

const read = require('node-readability');

const app = express();

// F1 >sql -- open datebase


app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/articles", (req, res, next) => {
  Article.all((err, articles) => {
    if (err) return next(err);
    res.send(articles);
  });
});


app.get("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  Article.find(id, (err) => {
    if (err) return next(err);
    res.send(articles);
  });
});


app.delete("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  Article.delete(id, (err) => {
    if (err) return next(err);
    // delete articles[id]
    res.send({ message: "Deleted" });
  });
});

// post post post 
// curl --data "url=http://localhost:8080/articles" http://localhost:8080/articles
// curl -X DELETE http://localhost:8080/articles/0

app.post("/articles", (req, res, next) => {
  const url = req.body.url
  read(url, (err, result) => {
    if(err || !result ) res.status(500).send('Error downloading article')
      Article.create(
        { title: result.title, content: result.content },
        (err, article) => {
          if(err) return next(err)
            res.send('ok')
        }
      )
  })
});






app.listen(app.get("port"), () => {
  console.log("Express web app on http://localhost:%s", app.get("port"));
});

module.exports = app;

//POST    curl --data "title=ts" http://localhost:8080/articles ----- в BASH  МОЖНО ТАК ДОБАВИТЬ ПОСТ ПО ПУТИ POST
// curl http://localhost:8080/articles ----- в BASH МОЖНО ПОЛУЧИТЬ ВСЕ ПОСТЫ
// curl -X DELETE http://localhost:8080/articles/0 ----- в BASH МОЖНО УДАЛИТЬ РОСТ
