const express = require('express');
require('./models/index');
const models = require('./models/');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/servers', async (req, res) => {
    const data = await models.Server.findAll();
    if (data.length > 0) {
        res.status(200).json(data);
    }else{
        res.status(200).json({message: 'No servers'});
    }
})

//TODO For tests
// app.get('/add', async (req, res) => {
//     await models.Server.create({
//         servername: 'BlackGOldRP',
//         maxonline: 1000,
//         online: 0,
//         ip: '127.0.0.2',
//     });
// })

app.listen(PORT, () => {
    console.log(`server started on http://127.0.0.1:80`);
});