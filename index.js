console.log("Hello Boolean");

const parameters = process.argv.slice(2);
const words = parameters[0] || "World";
console.log(`Hello ${words}`);
