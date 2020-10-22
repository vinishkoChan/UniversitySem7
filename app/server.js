const migrations = require('./migrations');
const setupDatabase = require('./db');
const env = require('./env');

const startServer = () => {
  const app = require('./app');
  const port = env.APP_PORT;
  const server = app.listen(port);

  server.on('listening', () => {
    console.log(`Server started at http://localhost:${env.APP_PORT}/`);
  });
};

if (env.AUTO_MIGRATE == 'true') {
  migrations.migrate()
    .then(() => {return setupDatabase;})
    .then(() => {
      startServer();
    })
    .catch(error => {
      console.log(error);
    });
} else {
  startServer();
}