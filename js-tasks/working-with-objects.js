const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...
const authors = library.map(book => book.author)
console.log(authors);

// List all book titles published after 2000...
const bookTitles = library.filter(book => book.year > 2000).map(book => book.title);
console.log(bookTitles);

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...
const [ firstBook ] = library
console.log(Object.keys(firstBook))

// List all bestseller book titles...
const bestSellerTitles = library.filter(book => book.year > 2000).map(book => book.bestseller)
console.log(bestSellerTitles);
