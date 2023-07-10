const { request } = require("undici");

async function dogPic() {
  const dogResult = await request("https://random.dog/woof.json");
  let response = await dogResult.body.json();
  return response;
}

module.exports = { dogPic };
