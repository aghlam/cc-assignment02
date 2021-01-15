import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '927460782630-si9oujoue6sd7rhlm546cai5e38g5sct.apps.googleusercontent.com'

function LogoutHooks() {
  const onLogoutSuccess = (response) => {
    console.log('Logged out Success')
    alert('Logged out Successfully')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  )
}

export default LogoutHooks;