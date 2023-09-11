const fs = require("fs");
const path = require("path");

const postData = async (cheese, style) => {
  const response = await fetch("http://localhost:3000/deployCheese", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cheese: cheese, style: style }),
  });
  return response;
};



// Define the file path to store selected cheeses
const selectedCheesesFilePath = path.join(__dirname, "..", "/data/selected_cheeses.txt");

// Initialize a variable to store previously selected cheeses
let selectedCheeses = new Set();

// Load selected cheeses from file if it exists
if (fs.existsSync(selectedCheesesFilePath)) {
  const fileData = fs.readFileSync(selectedCheesesFilePath, "utf8");
  if (fileData) {
    selectedCheeses = new Set(fileData.split("\n"));
  }
}

const selectCheese = () => {
  const filePath = path.join(__dirname, "..", "/data/all_cheeses.txt");
  const data = fs.readFileSync(filePath, "utf8");

  const lines = data.split("\n");

  // Filter out cheeses that have already been selected
  const availableCheeses = lines.filter(cheese => !selectedCheeses.has(cheese));

  if (availableCheeses.length === 0) {
    // If all cheeses have been selected, reset the selectedCheeses set
    selectedCheeses.clear();
  }

  // Select a random cheese from the available ones
  const randomIndex = Math.floor(Math.random() * availableCheeses.length);
  const selectedCheese = availableCheeses[randomIndex];

  // Add the selected cheese to the set of selected cheeses
  selectedCheeses.add(selectedCheese);

  // Save selected cheeses to the file
  fs.writeFileSync(selectedCheesesFilePath, [...selectedCheeses].join("\n"), "utf8");

  return selectedCheese;
};


// Define the file path to store selected styles
const selectedStylesFilePath = path.join(__dirname, "..", "/data/selected_styles.txt");

// Initialize a variable to store previously selected styles
let selectedStyles = new Set();

// Load selected styles from file if it exists
if (fs.existsSync(selectedStylesFilePath)) {
  const fileData = fs.readFileSync(selectedStylesFilePath, "utf8");
  if (fileData) {
    selectedStyles = new Set(fileData.split("\n"));
  }
}

const selectStyle = () => {
  const filePath = path.join(__dirname, "..", "/data/styles.txt");
  const data = fs.readFileSync(filePath, "utf8");

  const lines = data.split("\n");

  // Filter out styles that have already been selected
  const availableStyles = lines.filter(style => !selectedStyles.has(style));

  if (availableStyles.length === 0) {
    // If all styles have been selected, reset the selectedStyles set
    selectedStyles.clear();
  }

  // Select a random style from the available ones
  const randomIndex = Math.floor(Math.random() * availableStyles.length);
  const selectedStyle = availableStyles[randomIndex];

  // Add the selected style to the set of selected styles
  selectedStyles.add(selectedStyle);

  // Save selected styles to the file
  fs.writeFileSync(selectedStylesFilePath, [...selectedStyles].join("\n"), "utf8");

  return selectedStyle;
};

const selectedCheese = selectCheese();
const selectedStyle = selectStyle();
postData(selectedCheese, selectedStyle);
