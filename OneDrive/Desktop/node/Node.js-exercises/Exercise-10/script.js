const { writeFile } = require("fs");

writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
