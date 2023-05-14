export function user(name, age) {
  return JSON.stringify({name, age});
}

export function age(age) {
  return `My Age is ${age}`;
}

export function data(data) {
  return JSON.stringify(data)
}

export function add(a,b) {
  return a + b;
}
