import React, { Component } from 'react';
import '../../stylesheets/Book.css'

const Book = (props) =>{
    return(
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3>Book Name: {props.bookName}</h3>
            <h3>Book Author: {props.writer}</h3>
        </div>
    )
}

export default Book;