const express = require('express');
const graphqlHTTP = require('express-graphql');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const authMiddleware = require('./auth.middleware');
const { port } = require('./config/config');
const schema = require('./graph/schema');
const routes = require('./routes');

const app = express();
app.use(compression());
app.set('port', port);
app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.use(
  '/superSecretGraphRoute',
  authMiddleware,
  graphqlHTTP(req => ({
    schema: schema,
    graphiql: false,
    context: {
      profile: req.profile,
      host: req.headers.host,
      req: req
    }
  }))
);
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  if (err.status === 500) {
    res.status(200);
  } else {
    res.status(err.status || 200);
  }
  res.send({
    message: err.message,
    error: req.app.get('env') === 'local' ? err : ''
  });
});

app.listen(port, () => {
  console.log('Express server listening on port', port);
});

process.on('SIGINT', () => {
  process.exit(0);
});

module.exports = app;
