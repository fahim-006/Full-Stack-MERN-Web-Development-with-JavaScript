import React, { Component } from 'react';
import '../../stylesheets/Book.css'

const Book = (props) =>{
    return(
        <div className="Book">
            <input type="text" onChange={props.inputName} value = {props.bookName}/>
            <h3 onClick = {props.delete}>Book Name: {props.bookName}</h3>
            <h3>Book Author: {props.writer}</h3>
        </div>
    )
}

export default Book;