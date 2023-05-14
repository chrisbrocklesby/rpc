const rpc = async (rpcFunction) => await (
  await fetch('http://localhost:3000', { method: 'POST', body: rpcFunction })
  ).text();

const call = await rpc(`age(${5})`)
// const call = await rpc(`user({name: "Bob", age: 44})`)
// const call = await rpc(`data({name: "Joe", age: 45})`)
// const call = await rpc(`add(${5},${5})`)

console.log(call)
