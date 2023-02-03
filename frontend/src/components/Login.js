import React from 'react'

const Login = () => {
  return (
    <div className='Login my-5'>
    <form>

        <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="email" required/>
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Login