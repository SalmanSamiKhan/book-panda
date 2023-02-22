import React from 'react'
import { Helmet } from 'react-helmet-async'

const Signup = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user ={
        name : e.target.name.value,
        email : e.target.email.value,
        password : e.target.password.value,
        }
        console.log(user)
    }
    return (
        <div className='signup container my-5' style={{ maxWidth: '600px' }}>
            <Helmet>
                <title>Signup</title>
            </Helmet>
            <h2 className="text-center my-3"> Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="name"
                        pattern="[a-zA-Z][a-zA-Z ]{1,}" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' minLength={6} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup