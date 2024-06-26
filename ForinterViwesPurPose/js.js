// //prototypes
// let a = {
//   aname: "abhi",
//   language: "Javascript",
//   run: () => {
//     alert("self run");
//   },
// };

// console.log(a);

// let p = {
//   run: () => {
//     alert("running");
//   },
// };

// p.__proto__ = {
//   name: "abhii",
// };

// a.__proto__ = p;
// // a.run()
// console.log(a.name);

// JavaScript
// const outer = document.getElementById('outer');
// const middle = document.getElementById('middle');
// const inner = document.getElementById('inner');

// Event Bubbling Example
// inner.addEventListener('click', function() {
//     console.log('Inner element clicked');
// });

// outer.addEventListener('click', function() {
//     console.log('Outer element clicked');
// });
// middle.addEventListener('click', function() {
//     console.log('Middle element clicked');
// });

// Event Capturing Example

// outer.addEventListener('click', function(event) {
//     console.log('Outer element clicked during capturing');

// }, 1);

// middle.addEventListener('click', function(event) {
//     console.log('Middle element clicked during capturing');
//     event.stopPropagation();
// }, 1);

// inner.addEventListener('click', function() {
//     console.log('Inner element clicked during capturing');

// }, 1);

// function greet() {
//   console.log("Hello!");
// }
// Calling the function
// greet(); // Output: Hello!'
// function greet() {
//     console.log('Hello!');
// };

// Example of a function with a callback
// function doSomethingAsync(callback) {
//     setTimeout(function() {
//         console.log("Task completed asynchronously");
//         // Invoke the callback function
//         callback();
//     }, 2000);
// }

// // Define the callback function
// function callbackFunction() {
//     console.log("Callback function executed");
// }

// // Call the function with the callback
// doSomethingAsync(callbackFunction);

// Error Handeling
// try {
//     // Attempting to parse an invalid JSON string
//     const invalidJSON = '{ "name": "John", age: 30 }';
//     const parsedData = JSON.parse(invalidJSON);
//     console.log(parsedData);
// } catch (error) {
//     // Handling the error
//     console.error('An error occurred while parsing JSON:', error.message);
// } finally {
//     // Optional: Code that will always execute, regardless of whether an error occurred or not
//     console.log('Finally block executed');
// }

// document.getElementById('myList').addEventListener('click', function(event) {
//     console.log(event.target.tagName)//'LI'
//     console.log(event.target.textContent)//Item .
//     if (event.target.tagName === 'LI') {
//         console.log('Clicked on:', event.target.textContent);
//     }
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((users) => {
//     const userDataDiv = document.getElementById("userData");
//     users.forEach((user) => {
//       userDataDiv.innerHTML += `<p>User name: ${user.name}</p>`;
//     });
//     // Process the fetched data here
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// Closure Example
// function createCounter() {
//     let count = 0; // Variable count is within the scope of createCounter

//     return function() {
//       return count++; // Inner function retains access to count via closure
//     };
//   }

//   const counter = createCounter(); // Create a counter function
//   console.log(counter()); // Output: 0
//   console.log(counter()); // Output: 1
//   console.log(counter()); // Output: 2
//   console.log(counter()); // Output: 3
//   console.log(counter()); // Output: 4

// 25. How do you work with JSON data in JavaScript?
// const jsonString = '{"name": "John", "age": 30}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name); // Output: John
// console.log(jsonObject.age); // Output: 30

// const obj = { name: "John", age: 30 };
// const jsonString1 = JSON.stringify(obj);
// console.log(jsonString1); // Output: {"name":"John","age":30}

//acessing data
// const jsonObject = JSON.parse('{"name": "John", "age": 30}');
// console.log(jsonObject.name); // Output: John
// console.log(jsonObject.age); // Output: 30

// for (const key in jsonObject) {
//   console.log(`${key}: ${jsonObject[key]}`)
// }
// try {
//     const jsonObject = JSON.parse('{"name": "John", "age": 30}');
//     console.log(jsonObject);
//   } catch (error) {
//     console.error('Error parsing JSON:', error.message);
//   }

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(1, 2, 3)); // Output: 6

// Creating an object using object literal
// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log("Hello, " + this.name + "!");
//     }
//   };

//   // Accessing object properties
//   console.log(person.name); // Output: John
//   console.log(person["age"]); // Output: 30

//   // Adding a new property
//   person.city = "New York";

//   // Modifying a property
//   person.age = 35;

//   // Deleting a property
//   delete person.age;

//   // Calling a method
//   person.greet(); // Output: Hello, John!

//   console.log(person.age)

//   // Iterating over object properties
// const keys = Object.keys(person);
// console.log(keys); // Output: ["name", "age", "greet", "city"]

// // Merging objects
// const additionalInfo = { job: "Developer" };
// const mergedObject = Object.assign({}, person, additionalInfo);
// console.log(mergedObject);

// Create a new Date object with the desired date

const hello = () => {
  var date = new Date(2024, 10, 3);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var formattedDate =
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day +
    "/" +
    year;
  console.log(formattedDate);
};
let hi = hello();
console.log("hi world");
