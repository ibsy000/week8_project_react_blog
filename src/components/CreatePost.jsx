import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(props) {
    let navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You have to be logged in to do that, silly', 'danger')
            navigate('/login')
        }
    })

    const handleSubmit = event => {
        event.preventDefault()

        let myHeaders = new Headers()
        let myToken = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + myToken)
        myHeaders.append("Content-Type", "application/json")

        let formData = JSON.stringify({
            "title": event.target.title.value,
            "content": event.target.body.value
        })

        fetch("https://kekambas-blog.herokuapp.com//blog/posts", {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage(`${data.title} has been posted to the blog!`, 'success')
                    navigate('/posts')
                }
            })
    }

    return (
        <>
            <h1 className="text-center mt-4">Create A New Post</h1>

            <form className="createPost" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' 
                        name='title'/>

                    <label htmlFor="body">Body</label>
                    <input type="text" className='form-control' placeholder='Enter Body' 
                        name='body'/>

                    <input type="submit" className='btn text-dark w-100 mt-3' value='Create Post' 
                        style={{backgroundColor: '#F8961E'}}/>

                </div>
            </form>
        </>
    )
}
