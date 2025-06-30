import { PORT } from './src/config/server.config.js';
import express from 'express'
import apiRouter from './src/routes/index.js'
import bodyParser from 'body-parser'
import errorHandler from './src/utils/errorHandler.js';
import connectToDB from './src/config/db.config.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server is listeniing at ${PORT}`);
    await connectToDB();
})