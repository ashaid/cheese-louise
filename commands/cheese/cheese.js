const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const { queryText } = require("../../api/getText");
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
    const text = await queryText({
      text: "Historical verbose description of Bleu d'Auvergne cheese",
      max_length: 100,
    });
    console.log(text.length);
    const imageStream = await queryImage(
      "realistic photograph of bleu d'auvergne cheese"
    );
    const buffer = Buffer.from(imageStream);
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
        { name: "Bleu d'Auvergne Cheese", value: text },
        { name: "\u200B", value: "\u200B" }
        // { name: "Inline field title", value: "Some value here", inline: true },
        // { name: "Inline field title", value: "Some value here", inline: true },
        // { name: "Inline field title", value: "Some value here", inline: true }
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
