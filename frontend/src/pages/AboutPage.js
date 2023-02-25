import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
    return (
        <div className="about-section paddingTB60 my-5">
        <Helmet>
            <title>About</title>
        </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-title clearfix">
                        <h2>About <span>Bookmania</span> </h2>
                            <h3 className='my-3'>An e-commerce book website</h3>
                            <h5 className="about-paddingB"> Functionality: </h5>
                            <ul>
                            <li>User Signin, Signout option</li>
                            <li>Add items to cart options</li>
                            <li>Proceed to checkout</li>
                            <li>User data privacy</li>
                            </ul>
                            <p> Start shopping books with bookmania!</p>
                            <div className="about-icons my-5">
                                <ul >
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook fa-2xl"></i></a> &nbsp;
                                    <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter fa-2xl"></i></a> &nbsp;
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin fa-2xl"></i></a> &nbsp;
                                    <a href="mailto:admin@mail.com"><i className="fa-solid fa-envelope fa-2xl"></i></a> &nbsp;
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About