// Activity 1: Function Declaration
function evenOdd(num){
    if(num%2==0){
        console.log('Number is Even');
    }
    else{
        console.log('Number is Odd');
    }
}
evenOdd(40);

function squareNum(num1){
    let result = num1*num1;
    console.log(`Square of number ${num1} is  ${result}`)
}
squareNum(5)

// Activity 2: Function Expression
function maxNum(num1,num2){
    let result = Math.max(num1,num2)
    console.log(`The Greatet Number is ${result}`)
}
maxNum(20,30)

function combineString(){
    let name = 'Sushnika'
    let phno = 1234567890
    console.log(`The name is ${name} and the phone number is ${phno}`)
}
combineString()

//Activity 3: Arrow Function
let sum =(a,b) => console.log(a+b)
sum(6,9)

let charName = () => {
let name = "sushnika"
    if(name.includes('a')){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
charName()

// Activity 4: Function Parameters and DEfault value
let productNum = (num1, num2=10) => {
let result = num1+num2;
console.log(result)
}
productNum(2)

let person = (name, age=20) =>{
console.log(`Heloo ${name}`)
}
person('john')

// Activity: 5 Higher Order Function
const callNTimes = (hi, n) => {
    for (let i = 0; i < n; i++) {
        hi();
    }
};

const sayHello = () => {
    console.log("Hello!");
};

callNTimes(sayHello, 3);

let twoFunction = (func1, func2, val) => {
  let result1 = func1(val);
  let result = func2(result1);
 console.log(result);
};

let func1 = (x) => x+1 
let func2 = (x) => x+x

twoFunction(func1,func2,12) 

