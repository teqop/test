const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression')
const morgan = require('morgan')

const app = express();
app.use(compression())

app.use(morgan(':method :url :status :response-time ms - :req[content-length] :res[content-length]'));
app.use(bodyParser.json({ limit: '5mb'}))
app.post('/test', (req, res) => {
    res.json({ status: 200, body: req.body })
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Test Server started port: " + 3000)
});