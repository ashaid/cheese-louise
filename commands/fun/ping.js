const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  category: "fun",
  async execute(interaction) {
    const sent = await interaction.reply({
      content: "🏓⚪...",
      fetchReply: true,
    });
    await interaction.editReply(
      `...⚪🏓: ${sent.createdTimestamp - interaction.createdTimestamp}ms`
    );
  },
};
