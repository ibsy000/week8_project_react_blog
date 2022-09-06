import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function SinglePost(props) {
    let navigate = useNavigate()

    const { id } = useParams()
    const [post, setPost] = useState({})
    const [author, setAuthor] = useState({})

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                let postData = data
                setPost(postData)
                setAuthor(postData.author)
            })
    }, [id])

    return (
        <>
            <div className="row mt-5 justify-content-center">
                <div className="col-6">
                    <ul className="list-group text-center">
                        <li className="list-group-item" style={{backgroundColor: '#F9C74F'}}>
                            <p className='display-4'>{post.title}</p>
                            <hr className='mb-1'></hr>
                            <h6>{author.username}</h6>
                        </li>
                        <li className="list-group-item"><h4>{post.content}</h4></li>
                        {/* <Link to={`/posts/${id}/edit-post`} className="btn btn-success mt-2">Edit Post</Link>
                        <Link to={`/posts/${id}/delete-post`} className="btn btn-danger mt-2">Delete Post</Link> */}
                        {(author.username === localStorage.getItem('username'))
                            ? <>
                                <button type="button" className="btn btn-success mt-2"
                                    onClick={() => (navigate(`/posts/${id}/edit-post`, 
                                    {state:{post:post, author:author}}))}>Edit Post</button>

                                {/* <button type="button" className="btn btn-danger mt-2"
                                    onClick={() => (navigate(`/posts/${id}/delete-post`, 
                                    {state:{post:post, author:author}}))}>Delete Post</button> */}
                                    <button type="button" className="btn btn-danger mt-2" 
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >Delete Post</button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Delete Post?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                Are you sure you want to delete "{post.title}"?
                                                <br></br>
                                                This decision cannot be reversed.
                                                </div>
                                                <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Abort</button>
                                                <button type="button" className="btn btn-danger"
                                                    onClick={() => {
                                                        props.flashMessage('Your post has been deleted', 'success')
                                                        navigate('/posts')
                                                    }}>Delete Post</button>
                                                    {/* Delete post button doesn't have logic to delete post */}
                                            </div>
                                            </div>
                                            </div>
                                        </div>


                                </>
                            : null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
