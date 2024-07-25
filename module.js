// Activity 1: Creating and exporting Value
// Activit 2: Named and Deafult Exports
// Importing from module1.js
const { add, person } = require('./module1'); // named modules

// Using the add function
console.log(add(4, 5)); // Output: 9

// Using the person object's message method
person.message(); 

// DEfault 
const greetFunction = require('./module1').greet;
console.log(greetFunction('sushnika')); 

// Activity 3: Importing Entire Module 
const fixedValue = require('./entire-module')
console.log(fixedValue());

// Activity 4: Using Third-Party Plugins 
// Lodash Plugin 
const capitalize = require('lodash/capitalize');
// Example usage of Lodash capitalize function
const inputString = 'hello world';

// Capitalizing the input string using Lodash capitalize
const capitalizedString = capitalize(inputString);
console.log(capitalizedString); 

// installed axios 
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  