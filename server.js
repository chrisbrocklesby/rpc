import http from 'node:http';
import * as functions from './functions.js';

const server = http.createServer((req, res) => {
  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });
  
  req.on("end", () => {
    try {
      const data = Buffer.concat(chunks).toString();
      console.log(data)
      const rpcFunction = new Function('functions', `return functions.${data}`);
      res.end(rpcFunction(functions));
    } catch (error) {
      res.end(error.message);
    }
  });
});

server.listen(3000, () => { console.log('RPC Server listening...');});