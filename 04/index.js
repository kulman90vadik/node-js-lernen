const express = require('express')
const app = express()
const port = 3000;


app.get('/', (req, res) => {
    res.send('Helloo')
})

app.listen(port, () => {
    console.log('Express web app on http://localhost:%s', port);
})