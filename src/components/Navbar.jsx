import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#90BE6D'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Blog About It</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/posts">Blog Posts</Link>
                            <Link className="nav-link" to="/create-post">Create Post</Link>
                            <Link className="nav-link" to="/" onClick={props.logout}>Logout</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
