import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { Store } from '../Store'

function ShippingPage() {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(Store)
    const { userInfo, cart: { shippingAddress } } = state
    const [name, setName] = useState(shippingAddress.name || '')
    const [address, setAddress] = useState(shippingAddress.address || '')
    const [city, setCity] = useState(shippingAddress.city || '')
    const [postal, setPostal] = useState(shippingAddress.postal || '')
    const [country, setCountry] = useState(shippingAddress.country || '')
    useEffect(() => {
        if (!userInfo) { // if user not logged in
            navigate('/login?redirect=/shipping')
        }
    }, [userInfo, navigate])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'SAVE_SHIPPING_DETAILS',
            payload: {
                name, address, city, postal, country
            }
        })
        localStorage.setItem('shippingAddress',
            JSON.stringify({
                name, address, city, postal, country
            })
        )
        navigate('/payment')
    }
    return (
        <div className='shipping container my-5' style={{ maxWidth: '600px' }}>
            <Helmet>
                <title>Shipping</title>
            </Helmet>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <h2 className="text-center my-3"> Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="name"
                        pattern="[a-zA-Z][a-zA-Z ]{1,}" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name='address'
                        aria-describedby="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name='city' aria-describedby="city" required value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="postal" className="form-label">Postal Code</label>
                    <input type="text" className="form-control" id="postal" name='postal' aria-describedby="postal" required value={postal} onChange={(e) => setPostal(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" name='country' aria-describedby="country" required value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Continue</button>
            </form>
        </div>
    )
}

export default ShippingPage