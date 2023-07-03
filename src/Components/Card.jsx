import React from 'react'

const Card = ({title,body,id}) => {
    return (
        <div className="card">
            <i class="fa fa-times" aria-hidden="true"></i>
            {/* <p>{id}</p> */}
            <h2>
             {title.substring(0,15)}...
            </h2>
            <h3>{body.substring(0,100)}...</h3>
            <p>Mon,21 Dec 2020 14:57 GMT </p>
            <br />
            <div className="img">
                <img src="https://plus.unsplash.com/premium_photo-1680742508463-acb8c21af3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
        </div>

    )
}

export default Card