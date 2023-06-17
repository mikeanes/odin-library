let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let bookRead = document.getElementById('read');
let tempDisplay = document.getElementById('tempDisplay');
let addBook = document.getElementById('addBook');

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return(title + " by " + author + ", " + pages + " pages, " + read)
    }
}

addBook.addEventListener("submit", function(event){
    event.preventDefault();
    let book;
    if(bookRead.checked){
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'read');
    }
    else{
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'not read');
    }
    myLibrary.push(book);
    console.log(myLibrary);
    displayBooks();
    addBook.reset();
})

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
myLibrary.push(theHobbit);


console.log(myLibrary);
displayBooks();

//Loop through and display books on page
function displayBooks(){
    tempDisplay.textContent = "";
    myLibrary.forEach(function(book){
        tempDisplay.innerHTML += '<br>' + book.info();
    });
}