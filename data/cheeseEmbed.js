const { EmbedBuilder, AttachmentBuilder, bold } = require("discord.js");
const { queryText } = require("../api/getText");
const { queryImage } = require("../api/getImage");

module.exports = {
  async execute(data) {
    let text = await queryText({
      text: `Historical verbose description of ${data} cheese.`,
    });
    const imageStream = await queryImage(
      `realistic photograph of ${data} cheese`
    );
    const buffer = Buffer.from(imageStream);

    const file = new AttachmentBuilder(buffer, {
      description: `${data} image`,
      name: "undefined.png",
    });
    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(bold(data))
      .setImage("attachment://undefined.png")
      .setTimestamp()
      .setFooter({
        text: "🧀 🧀 🧀 🧀 🧀",
      })
      .setDescription(text);
    return [embed, file];
  },
};
