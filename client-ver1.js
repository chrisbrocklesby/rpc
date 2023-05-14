class Rpc {
  constructor(url) {
    return new Proxy(this, {
      get: (_, func) => async function () {
          const args = Array.from(arguments).map(item => 
            typeof item === 'string' ? `'${item}'` : `${item}`)
            .join(', ')
        try {
        return await (
          await fetch(url, { method: 'POST', body: `${func}(${args})` })
          ).text();
        } catch (error) {
          console.log(error.message);
        }
      }
    });
  }
}

const rpc = new Rpc('http://localhost:3000');

const test = await rpc.user(44,2)
console.log(test);