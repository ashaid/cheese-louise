const express = require("express");

const createServer = (client) => {
  const app = express();
  const port = 3000;

  app.get("/", (_, res) => {
    res.send(`${client.user.username} says Hello World!`);
  });

  return app;
};

module.exports = { createServer };
