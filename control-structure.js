// Activity 1 : if-else statement
//Task:1 
let num = -10
if(num>0){
    console.log('number is positive')
}
else if(num<0){
    console.log('number is negative')
}
else{
    console.log('number is zero')
}

// Task: 2
let age = 17
if(age>=18){
    console.log('you are eligible to vote')
}
else{
    console.log('you are not eligible to vote')
}

// Activity 2:
// Task: 3
let val1 = 20;
let val2 = 50;
let val3 = 40;
if(val1>val2){
    console.log('Value one is greater')
}
if(val2>val3){
    console.log('Value two is greater')
}
else{
    console.log('Value three is greater')
}

//Activity: 3
// Task: 4
switch(5){
    case 1:
    console.log('sinday')
    break;
    case 2:
    console.log('Monday')
    break;
    case 3:
    console.log('Tuesday')
    break;
    case 4:
    console.log('Wednesday')
    break;
    case 5:
    console.log('Thursday')
    break;
    case 6:
    console.log('Friday')
    break;
    case 7:
    console.log('Saturday')
    break;
    default:
        console.log('wrong value')
}

//Task 5
let number = 90
let grade
switch(true){
    case (number>=90):
        grade = 'A'
        break
    case (number>=80):
        grade = 'B'
        break
    case (number>=70):
        grade = 'C'
        break
    case (number>=60):
        grade = 'D'
        break
    case (number>=30):
        grade = 'F'
        break
    default:
        console.log('NO Results')
}
console.log(`Grade: ${grade}`)

// Activity 4 
let value = 35
let result =(value%2==0)? 'Number is Even' : 'Number is Odd';
console.log(result)


// Activity 5
// Combining Condition
let year = 2004
let leapYear = (year%4==0 && (year%400==0 || year%100!=0))? 'Leap Year' : 'Not a Leap Year';
console.log(leapYear)