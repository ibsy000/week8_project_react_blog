import React, { useState, useEffect } from 'react'
import SortBy from './SortBy'
import { Link } from 'react-router-dom'


export default function BlogPosts(props) {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        fetch('https://kekambas-blog.herokuapp.com//blog/posts')
            .then(response => response.json())
            .then(data => {
                let postData = data
                setPosts(postData)
            })
    }, [])

    let handleSort = (sortType) => {
        let unsortedPosts = [...posts]
        let sortedPosts = unsortedPosts.sort((a,b) => {
            if (a[sortType] > b[sortType]){
                return 1
            } else {
                return -1
            }
        })
        setPosts(sortedPosts)
    }

    return (
        <>  
            <h1 className='text-center mt-4'>Blog Posts</h1>
            <hr></hr>
            <SortBy handleSort={handleSort}/>

            <div className="row justify-content-center">
            {posts.map((post, idx) => {
                let newDate = new Date(post.date_created).toLocaleString()
                return (
                <div className="card m-3 p-0" key={idx} style={{maxWidth: '540px'}}>
                    <div className="row g-0">

                        <div className="col-md-4">
                            {(post) ? 
                                <img src={`https://picsum.photos/id/${getRandomInt(400, 451)}/200/300`} 
                                    className="img-fluid rounded-start" alt=''/>
                                : null}
                        </div>
                        
                        <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <h5 className="card-title mb-0">{post.title}</h5>
                                    <small className="text-muted">{post.author.username}</small>
                                    <p className="card-text overflow-hidden mt-3" style={{height: '60px'}}> 
                                        {post.content}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {newDate}
                                        </small>
                                    </p>
                                    <Link to={`/posts/${post.id}`} className="btn btn-primary mt-2">View Full Post</Link>
                                </div>
                        </div>
                    </div>
                </div>
                )
            })}
            </div> 
        </>
    )
}
