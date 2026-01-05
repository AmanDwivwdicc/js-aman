const coding = ['html', 'css', 'js', 'react', 'nodejs'];


//note: forEach loop does not return anything

const nums=[1,2,3,4,5,6,7,8,9,10]

//filter method creates a new array with all elements that pass the test implemented by the provided function and it returns the new array
const newNums = nums.filter( (num) => num>4)

// console.log(newNums);

const Books = [
    { title: 'Book One', author: 'Author One', rating: 4.5 },
    { title: 'Book Two', author: 'Author Two', rating: 3.8 },
    { title: 'Book Three', author: 'Author Three', rating: 4.2 },
    { title: 'Book Four', author: 'Author Four', rating: 5.0 },
];

let highRatedBooks = Books.filter( (book) => book.rating >=4.0 );

// console.log(highRatedBooks);
// if we are writing filter condition in one line, no need to use return keyword and curly braces
// but if we are writing in multiple lines, we have to use return keyword and curly braces

highRatedBooks = Books.filter((bk) => {
    return bk.rating >= 4.0 && bk.title=='Book Three'
})

console.log(highRatedBooks);

