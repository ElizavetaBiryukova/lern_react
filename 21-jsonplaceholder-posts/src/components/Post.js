import React from 'react'
import './Post.css'

function Post({ userId, id, title, body }) {
    return (
        <div className='post'>
            <small>{id}</small>
            <h1>{title}</h1>
            <p>{body}</p>
            <h3>User ID: {userId}</h3>
        </div>
    )
}

export default Post