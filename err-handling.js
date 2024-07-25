// Activity 1: Basic Error Handling with try and catch
// TAsk 1: Write a function that intentionally throws an error aand use try and catch block to handle error and log an appropriate message to console
async function errGen(){
    try {
        let error = true;
        if(!error){
            console.log('Code is Working Fine');
        }
        else{
            throw new Error('Simulated error');
        }
        
    } catch (error) {
        console.log('ERROR: Something Went wrong', error.message)
        
    }
}
errGen();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
 function divTwo(a,b){
    if(a%b){
        console.log('Number divided');
    }
    if(b==0){
        throw new Error('Cant Divide as denominator is zero');
    }
 }

 try {
    divTwo(2,4);
    divTwo(2,0);
 } 
 catch (error) {
    console.log('Error', error.message);
 }

 //Activity 2: Finally BLock
 function divTwo(a,b){
    if(a%b){
        console.log('Number divided');
    }
    if(b==0){
        throw new Error('Cant Divide as denominator is zero');
    }
 }

 try {
    divTwo(2,4);
 } 
 catch (error) {
    console.log('Error', error.message);
 }
 finally{
    console.log('The code is either executed or not')
 }

 // Activity 3: Custom Error Objects 
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error{
    constructor(){
        throw new Error("This is a custom error from cutomError class");
    }
    
}

try {
    var customerror=new CustomError();
} catch (error) {
    console.log(error.message);
}
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. 

    function validate(input){
        try{
        if(input==""){
            return new CustomError();
        }else{
            console.log("Your string is : "+input);
        }
    }catch(err){
        console.log("Please Enter a valid string");
        console.log(err.message);
    }
    }

    validate("");
    validate("hello")
    

 // Activity 4: Error handling in Promises

 const promiseOne = new Promise((resolve, reject) => {
    let error = 'false'
    if(!error){
        resolve('COndition is true');
    }
    else {
      reject('Condition is False');
    }
 }).then(()=>{
    console.log('TRue')
})
 .catch(()=> {
    console.log(Error)
});

 async function customPromiseOne(){
    try {
        const response = await promiseOne 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
customPromiseOne();

// Activity 5: Graceful Error handling in Fetch

fetch('https://jsonplaceholder.api.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error));

async function getAllUsers(){
try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json(); 
        console.log(data);
     }
catch (error) {
    console.log("E:",error);
}
}
getAllUsers();