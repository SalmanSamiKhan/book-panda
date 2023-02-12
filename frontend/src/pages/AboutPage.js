import React from 'react'

const About = () => {
    return (
        <div className="about-section paddingTB60 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-title clearfix">
                            <h1>About <span>BookPanda</span></h1>
                            <h3>Lorem ipsum dolor sit amet </h3>
                            <p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                            <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
                            <div className="about-icons my-5">
                                <ul >
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook fa-2xl"></i></a> &nbsp;
                                    <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter fa-2xl"></i></a> &nbsp;
                                    <a href="https://www.twitter.com/"><i className="fa-brands fa-linkedin fa-2xl"></i></a> &nbsp;
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