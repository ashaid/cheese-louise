const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cheese")
    .setDescription("starts the daily cheese"),
  category: "cheese",
  async execute(interaction) {
    await interaction.deferReply();
    await wait(4000);
    await interaction.editReply({
      content: "WIP",
      fetchReply: true,
    });
  },
};
