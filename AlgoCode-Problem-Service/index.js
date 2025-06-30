import { PORT } from './src/config/server.config.js';
import express from 'express'
import apiRouter from './src/routes/index.js'
import bodyParser from 'body-parser'

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/api',apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listeniing at ${PORT}`);
})