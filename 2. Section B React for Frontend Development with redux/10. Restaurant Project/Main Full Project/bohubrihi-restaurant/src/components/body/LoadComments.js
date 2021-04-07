import React from 'react'
import dateformat from 'dateformat'

const LoadComments = props =>{
    return(
        props.comment.map(comment =>{
            return(
                <div key = {comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateformat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}
export default LoadComments;