// problem solved------------------------------>393
//  Function calling another function as parameter
function greet(name) {
  return `Hello, ${name}!`;
}

function executeCallback(callback) {
  const result = callback("Alice");
  console.log(result);
}

executeCallback(greet);

// Output: "Hello, Alice!"

// problem solved------------------------------->394
// Function with object and callback
function processObject(obj, callback) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(key, obj[key]);
    }
  }
}

const person = { name: "John", age: 30, city: "New York" };

processObject(person, (key, value) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// city: New York

// problem solved------------------------------>395
// Number processor with callback
function numberProcessor(number, callback) {
  const result = number / 4;
  callback(result);
}

numberProcessor(20, (result) => {
  console.log(`Result: ${result}`);
});
// Output: "Result: 5"

// problem solved------------------------------>396
//  Function calling another function internally

function greetingHandler(name) {
  return `Welcome, ${name}!`;
}

function getUser() {
  const userName = "Sarah";
  const greeting = greetingHandler(userName);
  console.log(greeting);
}

getUser(); // Output: "Welcome, Sarah!"
