function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

await sleep(1000);

console.log("Hello, TLA!");

