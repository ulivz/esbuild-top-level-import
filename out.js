// src/d.ts
function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

// src/b.ts
await sleep(1e3);
var B = "TLA (b)";

// src/c.ts
await sleep(500);
var C = "TLA (c)";

// src/a.ts
console.log("Hello", B, C);
