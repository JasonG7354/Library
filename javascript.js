
// Form Variables
const showButton = document.querySelector(".addBookButton");
const submitButton = document.querySelector(".submitButton");
const dialog = document.querySelector("#dialog");
const titleBook = document.querySelector("#title");
const authorBook = document.querySelector("#author");
const pagesBook = document.querySelector("#pages");
const readBook = document.querySelector('#readYes');
 // Html variables
 const libraryContainer = document.querySelector(".library");




const myLibrary = new Array();


function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(array){
    for (let i = 0; i < array.length; i++){
        const newDiv = document.createElement("div");
        for (const books in array[i]){
            newDiv.innerText = books["id"];
            libraryContainer.appendChild(newDiv);
        }
    };
}


showButton.addEventListener("click", () => {
    dialog.showModal();
})

submitButton.addEventListener("click", () => {
    let haveRead;
    if (readBook.checked === true){
        haveRead = true;
    } else {
        haveRead = false;
    }
    const book1 = new Book(crypto.randomUUID(), titleBook.value, authorBook.value, pagesBook.value, haveRead);
    myLibrary.push(book1);
    addBookToLibrary(myLibrary);

    
})

