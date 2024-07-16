// Activity 1
// For loop
for(i=1;i<=10;i++){
    console.log(i)
}

for(i=1;i<=10;i++){
    let result = 5*i;
    console.log(`5*${i}= ${result}`)
}

// Activity 2
//while loop 
let numbers = 1
let sum=0
while(numbers<=10)
    {
        sum+= numbers;
        numbers++;
    }
    console.log(`Total Sum: ${sum}`)

let j=10;
while(j < 0){
console.log(j)
j--;
}

// Activity 3
// dowhile loop 
let var1 = 1
do{
    console.log(var1)
    var1++;
}while(var1<=5)

let num = 1
let facNum =1
do{
    facNum*= num;
    num++;
    console.log(facNum)
}while(num<=5)

// Activity 4: Nested For Loop
for (let i = 1; i <= 5; i++) { 
    let row = '';
    for (let j = 1; j <= i; j++) { 
        row += '*'; 
    }
    console.log(row); 
}

// Activity 5: Loop Control Structure
for(num=1;num<=10;num++){
    if(num==5) continue
    console.log(num)
}

for(num1=1;num1<=10;num1++){
    if(num1==7) break
    console.log(num1)
}
