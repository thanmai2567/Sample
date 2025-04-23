const fs = require('fs');
const path = require('path');

// Create directory
const dirPath = path.join(__dirname, 'testDir');
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Directory created");
}

// Create files in different formats
fs.writeFileSync(path.join(dirPath, 'file.txt'), 'Hello, Text File!');
fs.writeFileSync(path.join(dirPath, 'file.json'), JSON.stringify({ name: "NodeJS", type: "json" }));
fs.writeFileSync(path.join(dirPath, 'file.csv'), 'Name,Age\nAlice,23\nBob,30');

console.log("Files created");
