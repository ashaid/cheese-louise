const { EmbedBuilder, AttachmentBuilder, bold } = require("discord.js");
const { queryText } = require("../api/getText");
const { queryImage } = require("../api/getImage");

module.exports = {
  async execute(data) {
    let text = await queryText({
      text: `Historical verbose description of ${data} cheese.`,
      max_length: 1000,
    });
    text = text.replace(/^[^.]*./g, "");
    text = text.replace(/\\n\\n/g, "\n \n");
    // let text =
    //   "Historical verbose description of Bleu d'Auvergne cheese\n\nA distinctive, semi-firm cow’s milk blue cheese, Bleu d'Auvergne has been manufactured in the Auvergne region of France since the early 19th century. It presents a strong aroma, a pronounced taste and an intense colour. The cheese has a greyish, slightly oily and rather elastic consistency and it is usually formed into a wedge shape.\n\nThe process of manufacturing Bleu d'Auvergne begins with the milk being heated to 30°C. The milk is then inoculated with salt and special moulds whichgives the cheese its distinctive blue veins. After that, the cheese is brought to pressures of up to 200 kg/cm², ensuring a solid but creamy cheese. \n\nThe final step involves warming up the cheese and turning it daily for 2 to 4 weeks, depending on its weight. During this period, the special moulds and salt will continue to penetrate, allowing the blue veins to form and creating the characteristic crumbly-chalky texture that is associated with the cheese. \n\nOnce the cheese is ready for consumption, it should be stored in a cool place. When served, Bleu d'Auvergne cheese should be cut in wedges and served with nuts, a salad of bitter leaves, fresh fruits or a sweet and tart chutney.";

    const imageStream = await queryImage(
      `realistic photograph of ${data} cheese`
    );
    const buffer = Buffer.from(imageStream);

    const file = new AttachmentBuilder(buffer, {
      description: "[Cheese] image",
      name: "undefined.png",
    });
    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(bold(data))
      .setImage("attachment://undefined.png")
      .setTimestamp()
      .addFields()
      .setFooter({
        text: "🧀 🧀 🧀 🧀 🧀",
      })
      .setDescription(text);
    return [embed, file];
  },
};
