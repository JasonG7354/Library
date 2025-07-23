
// Form Variables
const showButton = document.querySelector(".addBookButton");
const submitButton = document.querySelector(".submitButton");
const dialog = document.querySelector("#dialog");
const titleBook = document.querySelector("#title");
const authorBook = document.querySelector("#author");
const pagesBook = document.querySelector("#pages");
const readBook = document.querySelector('#readYes');
const readBookNo = document.querySelector('#readNo');

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
    const containerDiv = document.createElement("div");
    const removeButton = document.createElement("button");
    const readButton = document.createElement("button");
    const bookValues = Object.values(array[array.length - 1]);
    const uniqueID = bookValues[0];

    removeButton.classList.add("remove-button");
    removeButton.innerText = "Delete";
    containerDiv.classList.add("libraryBook");
    libraryContainer.appendChild(containerDiv);

    for (let i = 1; i < bookValues.length; i++){
            const newDiv = document.createElement("div");
            if (bookValues[i] === true){
                readButton.innerText = "Read";
                readButton.classList.add("read-button");
                containerDiv.appendChild(readButton);
            } else if (bookValues[i] === false){
                readButton.innerText = "Not Read";
                readButton.classList.add("unread-button");
                containerDiv.appendChild(readButton);
            } else {
                newDiv.innerText = bookValues[i];
                containerDiv.appendChild(newDiv);
            }
            
        };
       
    removeButton.addEventListener("click", () => {
        for (let i = 0; i < array.length;i++){
            let currentBookId = Object.values(array[i]);
            if (currentBookId[0] === uniqueID){
                array.splice(i, 1);
            }
        }
        removeButton.parentNode.remove();
    });
    containerDiv.appendChild(removeButton);

    readButton.addEventListener("click", () => {
        for (let i = 0; i < array.length;i++){
            let currentBookId = Object.values(array[i]);
            if (currentBookId[0] === uniqueID){
                if (array[i].read === true){
                    array[i].read = false;
                    readButton.innerText = "Not Read";
                    readButton.classList.remove("read-button");
                    readButton.classList.add("unread-button");
                }else{
                    array[i].read = true;
                    readButton.innerText = "Read";
                    readButton.classList.remove("unread-button");
                    readButton.classList.add("read-button");
                    };
            };
        };

        
    });
};

function clearForm(){
    const form = document.querySelector("form");
    const input = form.querySelectorAll("input");

    input.forEach(item => {
        item.value = "";
    })

    if (readBook.checked === true){
        readBook.checked = false;
    } else if (readBookNo.checked === true){
        readBookNo.checked = false;
    }
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
    clearForm();
    dialog.close();

    
})

