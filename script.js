const myLibrary = [];

function Book(title, author, pages, read) 
{
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info  = function()
  {
    return title + ", " + author + ", " + pages + ", " + read
  }

  this.getTitle = function()
  {
    return title
  }
}

function addBookToLibrary(title, author, pages, read) 
{
  myLibrary.push(new Book(title, author, pages, read))
}

const bookshelf = document.querySelector(".bookshelf")



addBookToLibrary("jk", "jk", "jk", true)
addBookToLibrary("jk2", "jk2", "jk2", true)
addBookToLibrary("j3", "jk3", "jk3", true)

function displayBooks(myLibrary) 
{
  bookshelf.innerHTML = '';
  
    for (const book of myLibrary) 
        {
          const div = document.createElement("div");
            div.textContent = book.getTitle()
            bookshelf.appendChild(div);
        }
}



displayBooks(myLibrary)

const dialog = document.querySelector("dialog")
const showDialog = document.querySelector(".new")
const outputBox = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");

const title = document.querySelector(".title")
const author = document.querySelector(".author")
const number = document.querySelector(".number")
const readStatus = document.querySelector(".read-status")

showDialog.addEventListener("click", () => 
    {
        dialog.showModal()
    })

dialog.addEventListener("close", (e) => 
  {
    outputBox.value = dialog.returnValue === "default" ? "Cancelled" : dialog.returnValue
  })

confirmBtn.addEventListener("click", (event) => 
  {
    addBookToLibrary(title.value, author.value, number.value, readStatus.value === "read" ? true: false)
    displayBooks(myLibrary)
    event.preventDefault();
    dialog.close(number.value);
    
  });