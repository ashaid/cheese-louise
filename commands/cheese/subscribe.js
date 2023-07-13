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

    for (let i = 0; i < 5; i++) {
      await wait(300);
      await interaction.editReply("⌛ Writing to database ⏳");
      await wait(300);
      await interaction.editReply("⏳ Writing to database ⌛");
    }

    const db = new JSONdb("./data/servers.json");
    const channelExistsInDb = db.has(channelId);

    let message;
    channelExistsInDb
      ? (db.delete(channelId), (message = "removed channel from database ✅"))
      : ((message = "added chanel to database ✅"),
        db.set(channelId, serverName));

    try {
      await interaction.followUp("✅ Successfully " + message);
    } catch {
      await interaction.followUp("Something went wrong.");
    }
  },
};
