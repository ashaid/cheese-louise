const { chatgptToken } = require("../config.json");
const { Configuration, OpenAIApi } = require("openai");

async function queryText(data) {
  const configuration = new Configuration({
    apiKey: chatgptToken,
  });
  const openai = new OpenAIApi(configuration);

  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: data }],
  });
  const msg = chatCompletion.data.choices[0].message.content;
  return msg;
}

module.exports = { queryText };
