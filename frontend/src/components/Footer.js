import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center  p-3 border-bottom'>
                <div>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </Link>
                </div>
            </section>
        </MDBFooter>
    );
}
export default Footer