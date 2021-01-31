import React, { useState } from 'react'

import {Nav, Navbar} from 'react-bootstrap'

import LoginHooks from '../Login/LoginHooks'
import LogoutHooks from '../Login/LogoutHooks'

function Navigation() {

    const [isSignedIn, setSignedIn] = useState(localStorage.getItem('isSignedIn'))
    
    const setStatus = () => setSignedIn(localStorage.getItem('isSignedIn') )

    return (
        <div>
            <Navbar bg='dark'>
                <Navbar.Brand href='#home' className='text-light'>
                    <img
                        src='https://cc-assignment02-bucket.s3.amazonaws.com/images/coffeeCup.svg'
                        alt='logo'
                        width='40'
                        height='35'
                        className='d-inline-block align-top'
                    />
                    Cafe Crusaders
                </Navbar.Brand>
                <Nav.Link href='/' className='text-light'>Home</Nav.Link>
                <Nav.Link href='/about' className='text-light'>About Us</Nav.Link>
                <Nav.Link href='/find' className='text-light'>Find a Cafe</Nav.Link>
                {isSignedIn ? <LogoutHooks onClick={ setStatus } /> :  <LoginHooks inline onClick={ setStatus } />}
            </Navbar>
        </div>
            
    )
}

export default Navigation