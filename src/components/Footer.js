import React from 'react';
import  '../customcss.css';
export function Footer(props) {
    return(
        <div className='container-fluid footer'>
            <div className='row mt-5'>
                <div className='col-12 col-md-6 col-lg-4 mt-3'>
                    <h2>Social Media</h2>
                    <p>Facebook</p>
                    <p>YouTube</p>
                    <p>Instagram</p>
                </div>
                
                <div className='col-12 col-md-6 col-lg-4 mt-3'>
                    <h2>About Us</h2>
                    <address>
                        Cognizant Building,
                        117 Technocomplex
                    </address>
                    <p>Since 2023</p>
                </div>
                
                <div className='col-12 col-md-6 col-lg-4 mt-3'>
                <h2>About Us</h2>
                <p>+91-77777777</p>
                <p>cts@cts.com</p>
                <p>Fax: +9787188778</p>
                </div>
                <p>© Copyright Team Cognizant</p>
            </div>
            

        </div>
    )
}

