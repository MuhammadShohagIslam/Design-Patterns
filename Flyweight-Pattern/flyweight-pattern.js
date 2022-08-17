/*
    *** Flyweight Pattern ***
        => The flyweight pattern is a useful way to conserve memory
            when we are creating a large number of similar objects.
        => Resuse existing instances when working with identical objects.

    *** Advantages ***
        => The flyweight pattern is useful when we are creating a huge number of objects, 
            which could potentially drain all available RAM.
        => It allow us to minimize the amount of consumed memory.
        => In javascript, we can easily solve this problem through prototype inheritance. 
        => Nowadays, hardware has GBs of RAM, which makes the flyweight pattern less important.

*/
// create a book class
class Book {
    constructor(title, author, isbn) {
        this.title = title, 
        this.author = author, 
        this.isbn = isbn
    }
}

// let's create the functionality to add new books to the list
const books = new Map();

// create a function which helps us create a new instance of one type of book.
const createBook = (title, author, isbn) => {
    // checking book is already has isbn number or not
    const existingBook = books.has(isbn);

    // if has exist same book type, we do not want to create an entirly same book type
    if (existingBook) {
        return books.get(isbn);
    }

    // if it does not contain the book's ISBN number yet, we will create a new book.
    const book = new Book(title, author, isbn);
    // set isbn and book in the map
    books.set(isbn, book);

    return book;
};

// to keep track of the total amount of copies, create bookList array
const bookList = [];

// create addBook function, which allows us to add multiple copies of the same book.
const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title, author, isbn),
        sales,
        availability,
        isbn,
    };
    bookList.push(book);
    return book;
};

addBook("ABC", "english", "AB123", false, 100);
addBook("ABC", "english", "AB123", true, 50);
addBook("DEF", "hshsf Lee", "CD345", true, 10);
addBook("IJK", "sfkjshfk Lee", "CD345", false, 20);
addBook("MLOP", "shshf", "EF567", false, 20);

console.log(bookList, "bookList");
console.log(books, "Books")
