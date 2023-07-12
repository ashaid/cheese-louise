const { tokenKey } = require("../config.json");

async function queryText(data) {
  const response = await fetch(
    "https://api.nlpcloud.io/v1/gpu/finetuned-gpt-neox-20b/generation",
    {
      headers: {
        Authorization: tokenKey,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  const text = JSON.stringify(result.generated_text);
  return text;
}

module.exports = { queryText };
