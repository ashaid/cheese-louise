const express = require("express");
const { getChannels } = require("./getChannels");
const { execute } = require("../data/cheeseEmbed");

const createServer = (client) => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.listen(port, () => {
    console.log(`Express is listening on ${port}`);
  });

  app.post("/deployCheese", async (req, res) => {
    const channels = getChannels();
    let msg = await execute(req.body.cheese, req.body.style);
    for (let key in channels) {
      const channelToSendMessage = client.channels.cache.get(key);
      channelToSendMessage.send({ embeds: [msg[0]], files: [msg[1]] });
    }
    res.status(200).send("POST Recieved");
  });
};

module.exports = { createServer };
