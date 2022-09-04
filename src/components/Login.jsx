import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

    let navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault()

        let username = event.target.username.value
        let password = event.target.password.value

        let myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`))
        
        let response = await fetch("https://kekambas-blog.herokuapp.com//auth/token", { 
                method: 'POST',
                headers: myHeaders
            })
        if (response.ok){

            let data = await response.json()

            localStorage.setItem('token', data.token)

            props.login()

            props.flashMessage(`${username} has successfully logged in. Welcome back!`, 'success')
            navigate('/')
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger')
        }

    }

    return (
        <>
            <div className="row">
                
                <h1 className='text-center mt-4'>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username'
                            name='username' />

                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password'
                            name='password' />

                        <input type="submit" className='btn w-100 mt-3 text-dark' value="Login"
                            style={{backgroundColor: '#F8961E'}}/>
                        
                    </div>
                </form>

            </div>
        </>
    )
}
