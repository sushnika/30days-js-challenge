// Activity 1: Class Definition
// Task 1: Define a Class Person with properties name and age, and a method to return a greeting message. Create an insatnce of the class and log the greeting message
class Person {
    constructor(fName, lName, name,age){
        this.fName = fName;
        this.lName = lName;
        this.name = name;
        this.age = age;
    }
    greet= function(){
        return `Hi, My name is ${this.name} and age is ${this.age}`
     }
    static greeting(){
        return `This is a Static Greeting Message`;
    }
    get fullname(){
        return `${this.fName} ${this.lName}`
    }
    set fullname(value){
        const parts = value.split(' ')
        this.fName = parts[0];
        this.lName =parts[1]
    }
}

//creating instance of class 
const PersonInstance = new Person("sush","rai","sushnika",29)
PersonInstance.fullname = 'Sushnika Kanwar'
console.log(PersonInstance.greet());


// Task 2: Add a method Person class that updates the age property and logs the updated age.
// method to update new age 
class PersonOne{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }  
    updateAge = function(newAge){
        this.newAge = newAge
        console.log(`The Update age is ${this.newAge}`);
  }

}
const updateAgeInstance = new PersonOne("sushnika",28)
updateAgeInstance.updateAge(29)

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class.Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class student extends Person{
    static totalStudents = 30;
    constructor(name,age,studentId ){
        // calling parent class consteuctor 
        super(name,age)
        this.studentId = studentId;
        student.totalStudents++;

}
greet= function(){
    return `Hi, My name is ${this.name} and my ID is ${this.studentId}`
 }
study = function(subject){
    console.log(`${this.name} is studing the subject ${subject}`);
}
static getTotalStudents (){
    return (student.totalStudents)
}
}
const studentDetails = new student('sush',25, 'S112')
studentDetails.study('Hindi');

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

console.log(studentDetails.greet())

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.greeting())

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total numbers of students.

console.log(`The Total Number of Students are`,student.getTotalStudents())
// Activity 4: Getters and Setters
//Task 7: Add a getter method to the Person class to return the full name(assume a firstName and lastName properly). Create an instance and log full name using the getter.
console.log(`The Full Name of a Person is :`, PersonInstance.fullname)

// Task 8: Add a setter method to the person class to update the name properties(firstName and lastName).Update the name using the setter and log the updated full name.

console.log(Person.fullname)





