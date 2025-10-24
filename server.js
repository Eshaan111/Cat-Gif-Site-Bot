const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT

app.use(express.static('./public'))
app.use(express.json);

app.get('/', (req, res) => {
    res.send('HUHU')
});



app.listen(PORT);
console.log(`listening on port ${PORT}`)
