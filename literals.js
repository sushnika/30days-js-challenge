// Activity:1 Template Literals
let personName = 'john';
let age = 29
console.log(`The name of the person is ${personName} and the age is ${age}`)
console.log(`The name of the person is ${personName} 
The age is ${age}`)

// Activity 2: Destructuring
const numbers = [2,4,6] 
const [first,,third] = numbers
console.log(first)
console.log(third)

const course = {
    coursename1: 'Javascript',
    author1: 'john',
    price1: 399
}
const course2 = {
    coursename: 'Javas2cript',
    author: 'joh2n',
    price: 399,


    
    publishedon: 2002
}

const {coursename,author} = course
console.log(coursename)
console.log(author)

// Activity 3: Spread and Rest Operators
const newObject = { ...course, ...course2 }; // Use object shorthand notation
console.log(newObject)

function sum (...numbers){
    let total = 0
    for(let num of numbers){
        total+= num;
    }
    return total;
}
console.log(sum(2,3));
console.log(sum(2,4,6));

// Activity 4: default Parameters
function productNum(num1, num2=1){
  let totalvalue;
  totalvalue = num1*num2;
  console.log(totalvalue);
}
productNum(3)

// Activity5: Enhanced Object Literals
const user = {
    username: "sush",
    email: "sush@gmail.com",
    greeting: function(){
        console.log(`Hi ${user.username}, Welcome to the Dashboard`)
    }
}
console.log(user.greeting())

const name = "name1";
const classname = "classname1"
const persondetail ={
    [name] : "john",
    [classname]: "IT"

}
console.log(persondetail);