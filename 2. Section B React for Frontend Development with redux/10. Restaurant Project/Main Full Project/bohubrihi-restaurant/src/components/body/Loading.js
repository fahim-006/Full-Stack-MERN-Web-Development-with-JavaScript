import React from 'react'

const Loading = () =>{
    return(
        <div className="col-12" style={{padding: "60px"}}>
           
            <span className="fa fa-spinner fa-5x text primary fa-fw fa-pulse"></span>
        </div>
    )
}
//fa-5x : koto gun boro
//fa-pulse : spinner ghurber
export default Loading;
