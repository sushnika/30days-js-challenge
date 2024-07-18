// Activity1: Array Creation and access
let colors = ['red','blue','orange']
console.log(colors)
console.log(colors[0],colors[2])


// Activity 2: Array Methods
console.log('Original Array', colors)
colors.push('yellow')
console.log('After the push method', colors)
colors.pop()
console.log('After the pop method', colors)
colors.shift()
console.log('After the shift method', colors)
colors.unshift('pink')
console.log('After the unshift method', colors)

// Activity 3: Array Methods(Intermediate)
const numbers = [10,20,30]
const result = numbers.map(test);
console.log(result)

function test(num){
     return num*num
}

const allNum = [2,3,,4,5,6,7,8,9,10,11,12]
const evenNum = allNum.filter(filterEven)
console.log(evenNum)

function  filterEven(even){
    if(even%2==0)
        return even;
}

const sum = [2,3,4,5]
const totalSum = sum.reduce(resultTotal)
console.log(totalSum)

function resultTotal(total, sum){
    return total+sum;
}

//Activity 4: Array Iteration
const num1 = [1, 2, 9, 4, 5];
console.log('----For Iteration----')
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}
console.log('----For each Iteration----')
num1.forEach(function(num) {
    console.log(num);
});

// Activity5: Multidimensional Array
let twoArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoArr)
console.log(twoArr[1][1], twoArr[2][2])