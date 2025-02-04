/*const fs = require('fs');

fs.mkdir('myFolder', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully!');
  }
});*/

/*const fs=require('fs');
fs.unlink('sample.txt',(err)=>{
    if(err){
        console.log("error occured")
    }
    else{
        console.log("file deleted")
    }
});*/

/*const fs = require('fs');
fs.rename('test.txt', 'sample2.txt', (err) => {
    if(err){
        console.log("error occured")
    }
    else{
        console.log("file renamed")
    }
});*/

/*const fs = require('fs');
const path = require('path');

// Correct path joining
const dirPath = path.join(__dirname, '22B81A05X1(FSD)', 'myFolder');
const filePath = path.join(dirPath, 'myFile.txt');

// Ensure directory exists
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully!');

    // Write a file to the directory
    const fileData = 'Hello, this is a test file written into the directory!';
    fs.writeFile(filePath, fileData, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully to:', filePath);
      }
    });
  }
});
*/

const fs = require('fs');

fs.readdir('22B81A05X1(FSD)', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Contents of myFolder:', files);
  }
});






