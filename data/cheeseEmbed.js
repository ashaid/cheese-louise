const { EmbedBuilder, AttachmentBuilder, bold } = require("discord.js");
const { queryText } = require("../api/getText");
const { queryImage } = require("../api/getImage");

module.exports = {
  async execute(cheese, style) {
    let text = await queryText(
      `Give me a short description of ${cheese} cheese and 3 fun facts about it. In the following style: ${style}`
    );
    const imageStream = await queryImage(
      `realistic photograph of ${cheese} cheese`
    );
    const buffer = Buffer.from(imageStream);

    const file = new AttachmentBuilder(buffer, {
      description: `${cheese} image`,
      name: "undefined.png",
    });
    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(bold(cheese))
      .setImage("attachment://undefined.png")
      .setTimestamp()
      .setFooter({
        text: `🧀 🧀 🧀 style: ${style} 🧀 🧀 🧀`,
      })
      .setDescription(text);
    return [embed, file];
  },
};
