const { SlashCommandBuilder } = require("discord.js");
const JSONdb = require("simple-json-db");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("subscribe")
    .setDescription("subscribes or removes this channel from daily cheese"),
  category: "cheese",
  async execute(interaction) {
    const channelId = interaction.channelId;
    const serverName = interaction.guild.name;

    await interaction.reply("⏳ Writing to database ⌛");

    const db = new JSONdb("./data/servers.json", { syncOnWrite: true });
    const channelExistsInDb = db.has(channelId);

    let message;
    channelExistsInDb
      ? (db.delete(channelId), (message = "Removed channel from database"))
      : ((message = "Added chanel to database"), db.set(channelId, serverName));
    await interaction.editReply(message);
  },
};
