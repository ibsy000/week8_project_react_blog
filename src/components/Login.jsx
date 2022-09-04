import React from 'react'

export default function Login(props) {
    return (
        <>
            <div className="row">
                
                <h1 className='text-center mt-4'>Login</h1>

                <form>
                    <div className="form-group">

                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username'
                            name='username' />

                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password'
                            name='username' />

                        <input type="submit" className='btn w-100 mt-3 text-dark' value="Login"
                            style={{backgroundColor: '#F8961E'}}/>
                        
                    </div>
                </form>

            </div>
        </>
    )
}
