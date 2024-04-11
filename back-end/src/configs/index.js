const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const userRoutes = require('../routes/userRoutes');

app.use('/api', [
    userRoutes
]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});