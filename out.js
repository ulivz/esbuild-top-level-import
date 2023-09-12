// index.js
function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}
await sleep(1e3);
console.log("Hello, TLA!");
