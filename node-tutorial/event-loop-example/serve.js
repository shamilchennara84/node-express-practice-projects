import { createServer } from "http";

const server = createServer((_, res) => {
  console.log("request event");
  res.end("hello world");
});

server.listen(5000, () => {
  console.log("server listening to port 5000");
});
