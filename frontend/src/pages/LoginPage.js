import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login container my-5' style={{maxWidth:'600px'}}>
    <Helmet>
            <title>Login</title>
        </Helmet>
    <form>
    <h2 className="text-center my-3"> Login </h2>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="email" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div className="my-3">
        <h5 className='my-44' style={{textDecoration:'underline'}}> <Link to='signup'>Create your account</Link> </h5>
    </div>
</div>
  )
}

export default Login