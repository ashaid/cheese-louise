const fs = require("fs");
const path = require("path");

const postData = async (data) => {
  const response = await fetch("http://localhost:3000/deployCheese", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cheese: data }),
  });
  return response;
};

const selectCheese = () => {
  const filePath = path.join(__dirname, "..", "/data/all_cheeses.txt");
  const data = fs.readFileSync(filePath, "utf8");

  const lines = data.split("\n");

  return lines[Math.floor(Math.random() * lines.length)];
};

const selectedCheese = selectCheese();
postData(selectedCheese);
