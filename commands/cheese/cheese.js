const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const { dogPic } = require("../../api/getText");
const { queryImage } = require("../../api/getImage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cheese")
    .setDescription("starts the daily cheese"),
  category: "cheese",
  async execute(interaction) {
    // channel stuff
    const channelId = interaction.channelId;
    console.log(channelId);
    // channel stuff

    await interaction.deferReply();
    const attatchment = await dogPic();
    const attatchment2 = await queryImage(
      "screenshot of cheese in sid meier's civilization video game"
    );
    const buffer = Buffer.from(attatchment2);
    let aData = {
      description: "image",
      name: "undefined.png",
    };
    const file = new AttachmentBuilder(buffer, aData);
    console.log(file.name);
    const embed = new EmbedBuilder()
      .setColor(0xefff00)
      .setTitle("COTD")
      .setImage("attachment://undefined.png")
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
      files: [file],
    });
  },
};
