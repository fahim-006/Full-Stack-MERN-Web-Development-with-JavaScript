let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');

//book class

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI class
class UI{
    
    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class="delete">X</a></td>`;

           

        list.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    
    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },5000);
    }
    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            UI.showAlert('Book Removed!', 'success');
        }
    }
}


//Add event Listener
booklist.addEventListener('click', removeBook);
form.addEventListener('submit', newBook);

function newBook(e){
    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector ('#isbn').value;


    if(title === '' || author === '' || isbn === ''){
        UI.showAlert("Please fill all the fields", "error");
    }else{
        let book = new Book (title, author, isbn);
        UI.addToBookList(book);
        UI.clearFields();
        e.preventDefault();
        UI.showAlert("Book Added!", "success");
    }   
}

function removeBook(e){
    UI.deleteFromBook(e.target);
    e.preventDefault();
}