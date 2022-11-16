import express from 'express';
import path from 'path';
import { errors } from 'celebrate';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { config as dotEnvConfig } from 'dotenv';
import cors from 'cors';

import { requestLogger, errorLogger } from './middlewares/logger';
import corsOptions from './utils/corsOptions';

import index from './routes/index';
import NotFoundError from './errors/NotFoundError';

import limiter from './utils/limiter';

import errorHandler from './middlewares/errorHandler';

dotEnvConfig();

const helmetConfig = {
  hidePoweredBy: false,
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'img-src': ["'self'", "'unsafe-inline'"],
      'connect-src': ["'self'", 'https://ya-praktikum.tech/api/v2/'],
      'default-src': ["'self'", 'https://ya-praktikum.tech/api/v2/'],
    },
  },
};

const port = process.env.PORT ?? 3000;

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(limiter);
app.use(helmet(helmetConfig));

app.use('/static', express.static(path.resolve(process.cwd(), 'static')));

app.use(express.static(path.resolve(__dirname), { extensions: ['css', 'js'] }));

app.use('/', index);

app.get('/:page', (_req, res) => {
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
