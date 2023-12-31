import React, { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => setPost(posts))
            .catch((error) => console.log(error.message))
    }, [])

    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} {...post} />
            })}
        </div>
    )
}

export default Posts