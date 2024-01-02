// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let n = 10;

function counterPrinter(i) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000)
}

for(let i = 1; i <= n; i++) {
  counterPrinter(i);
}
