const { bearerKey } = require("../config.json");

async function queryImage(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
    {
      headers: {
        Authorization: bearerKey,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const blob = await response.blob();
  const stream = await blob.arrayBuffer();
  return stream;
}

module.exports = { queryImage };
