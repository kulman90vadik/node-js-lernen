require('dotenv').config()


const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Helloo')
})

app.listen(port, () => {
    console.log('Express web app on http://localhost:%s', port);
})
 