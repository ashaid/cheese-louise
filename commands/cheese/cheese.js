const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { dogPic } = require("../../api/getText");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cheese")
    .setDescription("starts the daily cheese"),
  category: "cheese",
  async execute(interaction) {
    await interaction.deferReply();
    const attatchment = await dogPic();

    const embed = new EmbedBuilder()
      .setColor(0xefff00)
      .setTitle("COTD")
      .setImage(attatchment.url)
      .setAuthor({
        name: "tony",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org",
      })
      .setTimestamp()
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      })
      .setDescription("Cheese of the Day");

    await interaction.editReply({
      embeds: [embed],
    });
  },
};
