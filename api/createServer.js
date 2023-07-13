const express = require("express");
const { getChannels } = require("./getChannels");

const createServer = (client) => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.listen(port, () => {
    console.log(`Express is listening on ${port}`);
  });

  app.post("/deployCheese", (req, res) => {
    const channels = getChannels();
    for (let key in channels) {
      console.log(key);
      const channelToSendMessage = client.channels.cache.get(key);
      channelToSendMessage.send(req.body.cheese);
    }
    res.status(200).send("POST Recieved");
  });
};

module.exports = { createServer };
