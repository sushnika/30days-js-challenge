function add(a,b){
    return a+b;
}


// object for a person 
const person = {
    name:  'sushnika',
    gender: 'female',
    coding_experience: '3',
    message: function(){
        console.log(`My name is ${this.name} and having a coding experience of ${this.coding_experience}`)
    }
}
module.exports = {add,person};

// Default 
function greet(user) {
    return `Hello, ${user}!`;
}
module.exports.greet = greet;