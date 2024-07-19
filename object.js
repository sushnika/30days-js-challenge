// Activity1: object creation and Acess 
const book = {
    title: "Front-Title",
    author: "sush",
    year: 2000
}
console.log(book['title'], book['author'],book['year'])

// Activity 2: object Methods 
let newBook = {
    title: "NewBook",
    author: "sushnika",
    price: 300,
    details: function(){
        return (`The Name of the book is ${newBook.title} and author is ${newBook.author} \n`)
    },
    time: function(year){
        return newBook.year = 2005
    }
};
console.log(newBook.details(), newBook.time())
// Activity 3: Nested Objects
//Task: 5
const library ={
    books:[
        {
        title: 'book1',
        author:'sush'
        },
        {
            title: 'book2', 
            author:'sush'
        },
        {
            title: 'book3', 
            author:'sush',
        }
    ]
}
console.log(library)

// Task: 6
library.books.forEach(book => {
    console.log(`${book.title}`);
});

// Activity 4: This Keyword
// using the Activity 2 object newBook
newBook.moreDetails = function(){
    console.log(`The Title of the Book is ${this.title} and year is ${this.year}`)
}
console.log(newBook.moreDetails())

// Activity 5 Object iteration
const book1 = {
    title: '1984', author: 'sush', year: 2000,
};

for(let property in book1){
    console.log(`${property}: ${book1[property]}`)
}

//Task : 9

let valueKey = Object.keys(book1)
console.log(valueKey)

let valueBook = Object.values(book1)
console.log(valueBook)