const fs = require("fs");
const path = require("path");

const getChannels = () => {
  const filePath = path.join(__dirname, ".." + "/data/servers.json");
  const jsonString = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonString);
};

module.exports = { getChannels };
