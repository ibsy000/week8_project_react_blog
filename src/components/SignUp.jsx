import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    // set redirect variable to send newly created users to login page
    let navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        
        // check that the passwords match
        let password = event.target.password.value
        let confirmPass = event.target.confirmPass.value

        // if passwords do not match
        if (password !== confirmPass){
            props.flashMessage('Your passwords do not match. Please try again.', 'danger')
        // if passwords match set up request to Flask API
        } else {
            console.log('Your passwords match. Congrats!')

            // set headers to match Postman POST request
            let myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")

            // stringify json data
            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: password // set variable for password data at start
            })
            // submit POST request to API server
            fetch("https://kekambas-blog.herokuapp.com//auth/users", {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        console.error(data.error)
                    } else {
                        props.flashMessage(`${data.username} has signed up successfully.`, 'success')
                        navigate('/login')
                    }
                })
        }
    }

    return (
        <>
            <div className="row">
                
                <h1 className='text-center mt-4'>Sign Up</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <label htmlFor="email">Email</label>
                        <input type="text" className='form-control' placeholder='Enter Email'
                            name='email' />

                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username'
                            name='username' />

                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password'
                            name='password' />

                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" className='form-control' placeholder='Confirm Password'
                            name='confirmPass' />

                        <input type="submit" className='btn w-100 mt-3 text-dark' value="Login"
                            style={{backgroundColor: '#F8961E'}}/>
                        
                    </div>
                </form>

            </div>
        </>
    )
}
