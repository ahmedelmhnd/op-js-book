const myLibrary = [];

class Book
{
  constructor(title, author, pages, read, index) 
  {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  

  info()
  {
    return this.title + ", " + this.author + ", " + this.pages + ", " + this.read
  }

  getTitle()
  {
    return title
  }

  toggleIndex()
  {
    this.read = !this.read
  }

}

function addBookToLibrary(title, author, pages, read) 
{
  myLibrary.push(new Book(title, author, pages, read, myLibrary.length))
}

const bookshelf = document.querySelector(".bookshelf")



addBookToLibrary("jk", "jk", "jk", true)
addBookToLibrary("jk2", "jk2", "jk2", true)
addBookToLibrary("j3", "jk3", "jk3", true)

function displayBooks(myLibrary) 
{
  bookshelf.innerHTML = '';

    for (const [index, book] of myLibrary.entries()) 
        {
          const div = document.createElement("div");
          div.textContent = book.info()
          bookshelf.appendChild(div);
          
          const span = document.createElement("span")
          const button = document.createElement("button");
          button.id = index
          button.classList.add("remove")
          button.textContent = "remove book"

          const tButton = document.createElement("button");
          tButton.id = index
          tButton.classList.add("toggle")
          tButton.textContent = "toggle read"

          span.appendChild(button)
          span.appendChild(tButton)
          div.appendChild(span)
        }
        attachRemoveListeners();
        attachToggleListeners();
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

  function attachRemoveListeners() {
    const removeButtons = document.querySelectorAll(".remove");
  
    removeButtons.forEach((remove) => {
      remove.addEventListener("click", (e) => {
        const elementId = parseInt(e.target.id, 10); // Get the index from the ID
        myLibrary.splice(elementId, 1); // Remove the book
        displayBooks(myLibrary); // Re-render the book list
      });
    });
  }


  function attachToggleListeners() {
    const toggleButtons = document.querySelectorAll(".toggle");
  
    toggleButtons.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        const elementId = parseInt(e.target.id, 10); // Get the index from the ID
        myLibrary[elementId].toggleIndex()
        displayBooks(myLibrary); // Re-render the book list
      });
    });
  }