const rpc = async (rpcFunction) => await (
  await fetch('http://localhost:3000', { method: 'POST', body: rpcFunction })
  ).text();

const john = "John";

const test = await rpc(`age(${5})`)

console.log(test)
