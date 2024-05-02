const { readFile, writeFile } = require("fs");

console.log("lets start");

writeFile("./content/sampe.txt", "hello world", "utf-8", (err) => {
  if (err) {
    console.log("error while writing the fil", err);
  }
});

readFile("./content/sampe.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error while writing the fil", err);
    return;
  }
  console.log(data);
  console.log("completed first task");
});
