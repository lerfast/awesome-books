class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class BookCollection {
    constructor() {
      let bookCollection = localStorage.getItem('bookCollection');
      this.bookList = bookCollection ? JSON.parse(bookCollection) : [];
    }
  
   
    displayBooks() {
        const bookListElement = document.getElementById('bookList');
        bookListElement.innerHTML = '';
        this.bookList.forEach((book, index) => {
          const bookDiv = document.createElement('div');
          bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-index="${index}">Remove Book</button>`;
          bookListElement.appendChild(bookDiv);
        });
      }
  
    
    addBook(title, author) {
      const book = new Book(title, author);
      this.bookList.push(book);
      localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
      this.displayBooks();
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  
   
    removeBook(title) {
      this.bookList = this.bookList.filter((book) => book.title !== title);
      localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
      this.displayBooks();
    }
  }
  
  
  const myBookCollection = new BookCollection();
  
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    myBookCollection.addBook(title, author);
  });
  
 
  const bookListElement = document.getElementById('bookList');
bookListElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeButton')) {
    const index = e.target.dataset.index;
    myBookCollection.bookList.splice(index, 1);
    localStorage.setItem('bookCollection', JSON.stringify(myBookCollection.bookList));
    myBookCollection.displayBooks();
  }
});
  
  
  myBookCollection.displayBooks();
  
























































