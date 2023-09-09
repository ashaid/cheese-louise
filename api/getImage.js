const { bearerKey } = require("../config.json");

async function retryFetch(url, maxRetries, delay) {
  for (let retry = 0; retry <= maxRetries; retry++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error(`Error on attempt ${retry + 1}: ${error}`);
    }

    if (retry < maxRetries) {
      console.log(`Retrying in ${delay} milliseconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error(`Failed to fetch after ${maxRetries} retries.`);
}

async function queryImageWithRetry(data, maxRetries, delay) {
  const url = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"; 
  const headers = {
    Authorization: bearerKey,
  };
  
  for (let retry = 0; retry <= maxRetries; retry++) {
    try {
      const response = await retryFetch(url, 1, delay, {
        headers,
        method: "POST",
        body: JSON.stringify(data),
      });

      const blob = await response.blob();
      const stream = await blob.arrayBuffer();
      return stream;
    } catch (error) {
      console.error(`Error on attempt ${retry + 1}: ${error}`);
    }
  }

  throw new Error(`Failed to query image after ${maxRetries} retries.`);
}

module.exports = { queryImageWithRetry };
