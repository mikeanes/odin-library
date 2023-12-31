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

//Mark as read or unread
Book.prototype.toggleRead = function(){
    if(this.read === 'Read'){
        this.read = 'Not Read';
    }else{
        this.read = 'Read';
    }
    displayBooks();
}

//Adding books to array
let addBook = document.getElementById('addBook');
addBook.addEventListener("submit", function(event){
    event.preventDefault();
    let book;
    if(bookRead.checked){
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Read');
    }else{
        book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Not Read');
    }
    myLibrary.push(book);
    displayBooks();
    backdrop.classList.remove('visible');
    modalContent.classList.remove('active');
    modalItself.style.zIndex = '-2';
    addBook.reset();
});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read');
const nineteen = new Book('1984', 'George Orwell', 262, 'Read');
const catcher = new Book('The Catcher in the Rye', 'J. D. Salinger', 196, 'Not Read');
const catchers = new Book('The Catchers in the Rye', 'J. D. Salinger', 196, 'Not Read');
myLibrary.push(theHobbit, nineteen, catcher, catchers);
console.log(myLibrary);
displayBooks();

//Loop through and display books on page
function displayBooks() {
    tempDisplay.textContent = "";
  
    myLibrary.forEach(function (book, index) {
      const listItem = document.createElement('div');
      listItem.classList.add('book-item');
      
      const readButtonId = book.read === 'Not Read' ? 'not-read' : 'read';
      const readButtonText = book.read === 'Not Read' ? book.read : book.read;
  
      listItem.innerHTML = `
        <h2>"${book.title}"</h2>
        <h2>${book.author}</h2>
        <p>${book.pages} Pages</p>
        <button id="${readButtonId}" onclick="myLibrary[${index}].toggleRead()">${readButtonText}</button>
        <button onclick="removeBook(${index})">Remove</button>`;
  
      tempDisplay.appendChild(listItem);
    });
  }
  

//Remove Book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
  }

//Activate Modal
let showModal = document.getElementById('showModal');
let modalItself = document.querySelector('.modal');
let modalContent = document.getElementById('addBook');
let backdrop = document.querySelector('.backdrop');
showModal.addEventListener('click', function(){
    modalContent.classList.add('active');
    backdrop.classList.add('visible');
    modalItself.style.zIndex = '3';
});
backdrop.addEventListener('click', function(){
    backdrop.classList.remove('visible');
    modalContent.classList.remove('active');
    modalItself.style.zIndex = '-2';
});



