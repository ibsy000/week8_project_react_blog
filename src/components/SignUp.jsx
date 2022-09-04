import React from 'react'

export default function SignUp(props) {

    const handleSubmit = event => {
        event.preventDefault()
        
        // check that the passwords match
        let password = event.target.password.value
        let confirmPass = event.target.confirmPass.value

        // if passwords do not match
        if (password !== confirmPass){
            props.flashMessage('Your passwords do not match. Please try again.', 'danger')
        // if passwords match
        } else {
            console.log('Your passwords match. Congrats!')
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
