const fs = require("fs");
const path = require("path");

// Path to your images directory
const directoryPath = path.join(__dirname, "../public/muri_08_02_2025/JPEG");

// Path to save the generated JSON file
const outputPath = path.join(__dirname, "../public/muri_08_02_2025/imageList.json");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter only image files (optional)
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  // Write the image filenames to a JSON file
  fs.writeFile(outputPath, JSON.stringify(imageFiles, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
      return;
    }
    console.log("Image list JSON file generated successfully!");
  });
});
