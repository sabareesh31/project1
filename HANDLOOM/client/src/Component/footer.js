import React from 'react';

export default class Footer extends React.Component
{
    render(){
        return(
            <div>
                <div className='row foot'>
                    <div className='col-sm-4 '>
                        <h4>ABOUT US</h4><div className='foot-p ml-3'>
                        <p >About Us</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Corpoeate</p></div>
                    </div>

                    <div className='col-sm-4'>
                        <h4>POLICIES</h4><div className='foot-p ml-3'>
                        <p>Return and  Exchange</p>
                        <p>Policy</p>
                        <p>Shipping Policy</p></div>
                    </div>

                    <div className='col-sm-4'>
                        <h4>LET US HELP YOU</h4><div className='foot-p ml-3'>
                        <p>Help / FAQ</p>
                        <p>Store Locator</p></div>
                    </div>
                </div>
            </div>
        )
    }
}