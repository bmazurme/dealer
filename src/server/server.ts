import express from 'express';
import mongoose from 'mongoose';

import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

import path from 'path';
import { errors } from 'celebrate';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { config as dotEnvConfig } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { requestLogger, errorLogger } from './middlewares/logger';
import corsOptions from './utils/corsOptions';

import index from './routes/index';
import { NotFoundError } from './errors';

import limiter from './utils/limiter';

import errorHandler from './middlewares/errorHandler';

dotEnvConfig();

const helmetConfig = {
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'", 'https://ya-praktikum.tech/api/v2/', 'http://localhost:3000/api/'],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    connectSrc: ["'self'", 'https://ya-praktikum.tech/api/v2/', 'http://localhost:3000/api/'],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'https://chairai.ru/'],
  },
};

const port = process.env.PORT ?? 3000;
const pth = 'mongodb://localhost:27017/dealer';

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(pth, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

app.use(requestLogger);

app.use(limiter);

if (process.env.NODE_ENV === 'production') {
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy(helmetConfig));
}

if (process.env.NODE_ENV === 'development') {
  const liveReloadServer = livereload.createServer();

  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });

  app.use(connectLivereload());
}

app.use('/static', express.static(path.resolve(process.cwd(), 'static')));
app.use(express.static(path.resolve(__dirname), { extensions: ['css', 'js'] }));

app.use('/api/', index);

app.get('*', (_req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

app.use('*', () => {
  throw new NotFoundError('HTTP 404 Not Found');
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
