// const message = "Hello world";

// console.log(message.slice(0 , 3));
// let firstWord = message.slice(0, 3);
// let secondWord = message.slice(6, 11);
// let output = `The output is : ${firstWord} ${secondWord}`;
// console.log(output);
// Hel world//
const pattern = /lo/g
const message = "hello worldlo ";
console.log(message.match(pattern))
const modifiedMessage = message.replace(pattern, "");

console.log(modifiedMessage);
s