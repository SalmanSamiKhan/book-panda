import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../Store'

const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const {search} = useLocation()
    // redirectInUrl will be shipping sent from cartPage proceed to checkout button
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    // if redirect not present, means not coming from cartpage then go to homepage
    const redirect = redirectInUrl? redirectInUrl:'/'
    const {state, dispatch:loginDispatch} = useContext(Store)
    const {userInfo} = state
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post('/api/user/login',{
                email:email,
                password:password
            })
            loginDispatch({type:'USER_LOGIN', payload:data})
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate(redirect||'/')
            console.log(data)
        } catch (error) {
            toast.error('Invalid Email or Password')
        }
    }
    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    }, [userInfo,navigate,redirect])
    
  return (
    <div className='login container my-5' style={{maxWidth:'600px'}}>
    <Helmet>
            <title>Login</title>
        </Helmet>
    <form onSubmit={handleSubmit}>
    <h2 className="text-center my-3"> Login </h2>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="email"
            required onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" minLength={6} 
            required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
    <div className="my-3">
        <h6>New to Bookmania?</h6>{' '}
        <h6 className='' style={{textDecoration:'underline'}}> <Link to={`/signup?redirect=${redirect}`}>Create your account</Link> </h6> 
        {/* redirect is sent from procedd to checkout on cart screen. redirect value is shipping . so it will redirect to shipping page */}
    </div>
</div>
  )
}

export default Login