import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../Store'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const {search} = useLocation()
    // redirectInUrl will be shipping sent from cartPage proceed to checkout button
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    // if redirect not present, means not coming from cartpage then go to homepage
    const redirect = redirectInUrl? redirectInUrl:'/'
    const {state, dispatch:loginDispatch} = useContext(Store)
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            toast.error('Passwords do not match')
            return
        }
        try {
            const {data} = await axios.post('/api/user/signup',{
                name:name,
                email:email,
                password:password
            })
            loginDispatch({type:'USER_LOGIN', payload:data})
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate(redirect||'/')
            // console.log(data)
        } catch (error) {
            toast.error(error.message)
        }
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
                        pattern="[a-zA-Z][a-zA-Z ]{1,}" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email'
                     aria-describedby="email" required value={email} onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password'
                     minLength={6} required value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name='confirmPassword'
                     minLength={6} required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="my-3">
        <h6>Already have an account?</h6>{' '}
        <h6 className='' style={{textDecoration:'underline'}}> <Link to={`/login?redirect=${redirect}`}>Login to your account</Link> </h6> 
        {/* redirect is sent from procedd to checkout on cart screen. redirect value is shipping . so it will redirect to shipping page */}
    </div>
        </div>
    )
}

export default Signup