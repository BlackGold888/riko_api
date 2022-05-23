const express = require('express');
const Server = require('./models/server');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const data = await Server.findAll();
    console.log(data);
    res.status(200).json({name: 'Black'});
})

app.listen(80, () => {
    console.log(`server started on http://127.0.0.1:80`);
})