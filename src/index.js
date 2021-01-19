/* eslint-disable import/no-dynamic-require */
import express from 'express';
import cors from 'cors';
import 'babel-polyfill';
import bodyParser from 'body-parser';

import fs from 'fs';
import path from 'path';

import api from './api';


fs.readdirSync(path.join(__dirname, 'models')).forEach((file) => {
  // eslint-disable-next-line global-require
  require(`./models/${file}`);
});

const app = express();
const { PORT = 3333 } = process.env;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', api);

app.listen(PORT, () => {
  console.log(`Servidor iniciado: http://localhost:${PORT}`);
});

export default app;
