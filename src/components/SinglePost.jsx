import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DeletePostbutton from './DeletePostbutton'

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

    const deletePost = () => {
        var myHeaders = new Headers()
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'))

        fetch (`https://kekambas-blog.herokuapp.com//blog/posts/${id}`, {
            method: 'DELETE',
            headers: myHeaders,
        })
            .then (res => {
                if (res.ok){
                    props.flashMessage('Your post has been obliterated! You will never see it again', 'danger')
                    navigate('/posts')
                } else {
                    props.flashMessage('Uhh excuse me? You cannot delete this post', 'danger')
                }
            })
    }

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

                                    <DeletePostbutton title={post.title} deletePost={deletePost}/>
                                </>
                            : null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
