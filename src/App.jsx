import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import BlogPosts from './components/BlogPosts'
import CreatePost from './components/CreatePost'
import DeletePost from './components/DeletePost'
import EditPost from './components/EditPost'
import FlashMessage from './components/FlashMessage'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import SinglePost from './components/SinglePost'

export default function App(props) {

    // Create states that will update the flash message, the flash category, and loggedIn state
    const [message, setMessage] = useState(null)
    const [category, setCategory] = useState(null)
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token')) 
        ? true : false)

    const flashMessage = (message, category) => {
        setMessage(message)
        setCategory(category)
    }

    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setLoggedIn(false)
        flashMessage('You are now logged out. Come back soon!', 'success')
    }
    

    return (
        <>
            <Navbar logout={logout} loggedIn={loggedIn}/>
            <div className="container">
                {message ? <FlashMessage message={message} category={category} 
                    flashMessage={flashMessage}/> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<BlogPosts />} />
                    <Route path='/create-post' element={<CreatePost loggedIn={loggedIn} 
                        flashMessage={flashMessage}/>} />
                    <Route path='/signup' element={<SignUp flashMessage={flashMessage}/>} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} 
                        login={login} />} />
                    <Route path='/posts/:id' element={<SinglePost />} />
                    <Route path='/posts/:id/edit-post' element={<EditPost />}
                        flashMessage={flashMessage}/>
                    <Route path='/posts/:id/delete-post' element={<DeletePost />} />
                </Routes>
            </div>
        </>
    )
}
