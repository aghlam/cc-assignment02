import React from 'react'

import LoginHooks from '../Login/LoginHooks'
import LogoutHooks from '../Login/LogoutHooks'

function Home() {


    return (
        <div>
            <h2>Welcome Message to home</h2>
            <LoginHooks />
            <LogoutHooks />

        </div>
    );
}

export default Home;