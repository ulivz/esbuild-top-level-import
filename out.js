// src/d.ts
function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

// src/b.ts
console.time("b");
await sleep(1e3);
console.timeEnd("b");
var B = "TLA (b)";

// src/c.ts
console.time("c");
await sleep(500);
console.timeEnd("c");
var C = "TLA (c)";

// src/a.ts
console.log("Hello", B, C);
console.timeEnd("a");
