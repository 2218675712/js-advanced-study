const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 设置允许跨域访问该服务
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'PUT,GET,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/fetchdata', (req, res) => {
    res.send('hello fetch');
});

app.get('/students', (req, res) => {
    res.send(req.query.id);
});

app.get('/students/:id', (req, res) => {
    res.send(req.params.id);
});

app.delete('/students/:id', (req, res) => {
    res.send(req.params.id);
});

app.post('/students', (req, res) => {
    res.send(req.body.a + "---" + req.body.b);
})
app.get("/list", (req, res) => {
    res.send([{
        id: 1,
        name: "小王",
        phone: "13333333",
        address: "涧西区"
    }, {
        id: 2,
        name: "小李",
        phone: "14444444",
        address: "涧西区"
    }, {
        id: 3,
        name: "小苏",
        phone: "555555555",
        address: "东北区"
    },]);
});
app.listen(3000);