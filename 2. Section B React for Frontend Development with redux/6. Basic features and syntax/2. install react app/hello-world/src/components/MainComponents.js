import React, {Component} from 'react'
import Book from './representational/Book'
import bookList from '../assets/books.js'
import BookList from './lists/BookList'

class MainComponent extends Component {
    state = {
        books:bookList,
        showBooks : true
      }
    
      changeWithInputState = (event,index) => {
        const book = {...this.state.books[index]}
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({books : books});
      }
    
      deleteBookState = index => {
        //const books = this.state.books.slice();
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
          books: books
        });
      };
    
      toggleBook = () =>{
        this.setState({showBooks : !this.state.showBooks})
      }
    
      render() {
        const style = {
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
        };
    
        //const booksState = this.state.books;
        let books = null;
    
        if(this.state.showBooks){
        books = <BookList 
            book = {this.state.books}
            deleteBookState = {this.deleteBookState}
            changeWithInputState = {this.changeWithInputState}
        />
      }
    
        //console.log(booksState);
        console.log(books);
    
        return (
          <div className="App">
            <h1 style={style}>Book List</h1>
            <button onClick = {this.toggleBook}> Toggle Book </button>
            {books}
          </div>
        );
      }
      
}

export default MainComponent;