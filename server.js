const express = require('express');
const app = express();
const PORT = process.env.port || 3000

app.use(express.static('./public'))
app.use(express.json);

app.get('/', (req, res) => {
    res.send('HUHU')
});



app.listen(PORT);
console.log(`listening on port ${PORT}`)
