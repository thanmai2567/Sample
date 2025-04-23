const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Make sure input file exists
fs.writeFileSync(inputPath, 'This is a sample text for streaming.');

// Create Readable and Writable Streams
const reader = fs.createReadStream(inputPath);
const writer = fs.createWriteStream(outputPath);

// Stream from input to output
reader.pipe(writer);

reader.on('end', () => {
  console.log("Streaming complete! Data written to output.txt");
});
