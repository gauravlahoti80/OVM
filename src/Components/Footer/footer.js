import React from 'react'
import '../Footer/footer.css'

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <p className='footer-text-1'>"BEHOLD, THE LORD IS COMING SOON"</p>
                <div className='footer-content'>
                    <div className='items-1'>
                        <div className='item-1'>
                            <p className='item-1-heading'>Digital Services</p>
                            <p className='item-1-text'>Live console</p>
                            <p className='item-1-text'>Sermon logger</p>
                            <p className='item-1-text'>Bibled</p>
                            <p className='item-1-text'>OVM App</p>
                        </div>
                        <div className='item-1'>
                            <p className='item-1-heading'>Social Connect</p>
                            <p className='item-1-text'>YouTube(OVM)</p>
                            <p className='item-1-text'>YouTube(Innaci)</p>
                        </div>
                        <div className='item-1'>
                            <p className='item-1-heading'>Prayer</p>
                            <p className='item-1-text'>Schedules</p>
                            <p className='item-1-text'>Prayer request</p>
                            <p className='item-1-text'>Today's word</p>
                        </div>
                    </div>

                    <div className='items-2'>
                        <div className='item-1'>
                            <p className='item-1-heading'>Watchables</p>
                            <p className='item-1-text'>Speech</p>
                            <p className='item-1-text'>Short talk</p>
                            <p className='item-1-text'>Testimony</p>
                            <p className='item-1-text'>Worship</p>
                            <p className='item-1-text'>Songs</p>
                            <p className='item-1-text'>Recent uploads</p>
                        </div>
                        <div className='item-1'>
                            <p className='item-1-heading'>Readables</p>
                            <p className='item-1-text'>Articles</p>
                            <p className='item-1-text'>Blogs</p>
                            <p className='item-1-text'>Testimonies</p>
                            <p className='item-1-text'>Short articles</p>
                            <p className='item-1-text'>Recent uploads</p>
                        </div>
                    </div>

                    <div className='items-3'>
                        <div className='item-1'>
                            <p className='item-1-heading'>Mission Activities</p>
                            <p className='item-1-text'>Anual reports</p>
                            <p className='item-1-text'>Word</p>
                            <p className='item-1-text'>Charity</p>
                            <p className='item-1-text'>Media</p>
                            <p className='item-1-text'>Education</p>
                            <p className='item-1-text'>Technology</p>
                        </div>
                        <div className='item-1'>
                            <p className='item-1-heading'>Account</p>
                            <p className='item-1-text'>Register</p>
                            <p className='item-1-text'>Sign in</p>
                            <p className='item-1-text'>Profile</p>
                        </div>
                    </div>

                    <div className='items-4'>
                        <div className='item-1'>
                            <p className='item-1-heading'>Events</p>
                            <p className='item-1-text'>Upcoming Events</p>
                            <p className='item-1-text'>Live streaming</p>
                        </div>
                        <div className='item-1'>
                            <p className='item-1-heading'>Connects</p>
                            <p className='item-1-text'>Contact us</p>
                            <p className='item-1-text'>Whatsapp</p>
                        </div>
                    </div>
                </div>
                <div className='subscribe-form'>
                    <div className='item-1'>
                        <input className='email_input' type="email"
                            placeholder='Email' />
                    </div>
                    <div className='item-1'>
                        <a className='subscribe-btn'>Subscribe</a>
                    </div>
                </div>
                <hr className='seperator'></hr>
                <div className='copyright-section'>
                    <p className='copyright-txt'>Copyright &copy; 2022 Omega voice ministries, All rights reserved.</p>
                    <p className='copyright-txt'>Pirvacy Policy  |  Terms of Use  |  Site Map</p>
                </div>
            </footer>

        </>
    )
}
