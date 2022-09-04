import React from 'react'

export default function CreatePost() {
    return (
        <>
            <h1 className="text-center mt-4">Create A New Post</h1>

            <form className="createPost">

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
