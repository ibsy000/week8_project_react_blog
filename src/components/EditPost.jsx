import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

export default function EditPost(props) {
    let navigate = useNavigate()
    const { id } = useParams()
    const { state } = useLocation()
    console.log(state)


    const handleSubmit = event => {
        event.preventDefault()

        let myToken = localStorage.getItem('token')
        var myHeaders = new Headers()
        myHeaders.append("Authorization", "Bearer " + myToken)
        myHeaders.append("Content-Type", "application/json")
    
        let formData = JSON.stringify({
            title: event.target.title.value,
            body: event.target.body.value
        })

        fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${id}`, {
            method: 'PUT',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    // let postData = data
                    // setPost(postData)
                    props.flashMessage('Your post has been edited!', 'success')
                    navigate(`/posts/${id}`)
                }
            })
    }


    return (
        <>
            <h1 className="text-center mt-4">Edit Post</h1>

            <form className="editPost" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' defaultValue={state.post.title}
                        name='title'/>

                    <label htmlFor="body">Body</label>
                    <input type="text" className='form-control' defaultValue={state.post.content}
                        name='body'/>

                    <input type="submit" className='btn text-dark w-100 mt-3' value='Edit Post' 
                        style={{backgroundColor: '#F8961E'}}/>

                </div>
            </form>
        </>
    )
}
