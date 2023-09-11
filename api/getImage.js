const { bearerKey } = require("../config.json");

async function queryImage(data, maxRetries = 5, retryDelay = 10000) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
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

      if (response.ok) {
        const blob = await response.blob();
        const stream = await blob.arrayBuffer();
        return stream;
      } else {
        // Handle non-ok response here, you can throw an error or log it.
        console.error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      // Handle fetch errors here, you can throw an error or log it.
      console.error("Fetch error:", error);
    }

    // Increment retries and wait before the next retry
    retries++;
    if (retries < maxRetries) {
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  throw new Error(`Failed after ${maxRetries} retries`);
}

module.exports = { queryImage };
