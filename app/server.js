const startServer = () => {
  const app = require('./app');
  const port = process.env.APP_PORT;
  const server = app.listen(port);

  server.on('listening', () => {
    console.log(`Server started at http://localhost:${process.env.APP_PORT}/`);
  });
};

startServer();