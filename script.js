let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let bookRead = document.getElementById('read');
let tempDisplay = document.getElementById('tempDisplay');

//Array and object prototype initialitzation
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
            return(title + " by " + author + ", " + pages + " pages, " + read);
    }
}

Book.prototype.toggleRead = function(){
    if(this.read === 'read'){
        this.read = 'not read';
    }else{
        this.read = 'read';
    }
    displayBooks();
}

//Adding books to array
let addBook = document.getElementById('addBook');
addBook.addEventListener("submit", function(event){
    event.preventDefault();
    let book;
    if(bookRead.checked){
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'read');
    }else{
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'not read');
    }
    myLibrary.push(book);
    displayBooks();
    addBook.reset();
});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const nineteen = new Book('1984', 'George Orwell', 262, 'read');
const catcher = new Book('The Catcher in the Rye', 'J. D. Salinger', 196, 'not read');
myLibrary.push(theHobbit, nineteen, catcher);
console.log(myLibrary);
displayBooks();

//Loop through and display books on page
function displayBooks(){
    tempDisplay.textContent = "";
    myLibrary.forEach(function(book, index){
        const listItem = document.createElement('p');
        listItem.classList.add('border');
        
        listItem.innerHTML = 
            `<h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.pages} Pages</p>
            <button onclick="myLibrary[${index}].toggleRead()">${book.read}</button>
            <button onclick="removeBook(${index})">Remove</button>`;
        

        tempDisplay.appendChild(listItem);
    });
}

//Remove Book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
  }

//Mark as read or unread
