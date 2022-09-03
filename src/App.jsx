import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BlogPosts from './components/BlogPosts'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'

export default function App(props) {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<BlogPosts />} />
                    <Route path='/create-post' element={<CreatePost />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </>
    )
}
