import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '927460782630-si9oujoue6sd7rhlm546cai5e38g5sct.apps.googleusercontent.com'

const LogoutHooks = () => {

  const onLogoutSuccess = (response) => {
    console.log('Logged out Success')
    alert('Logged out Successfully')
    localStorage.removeItem('googleUser')
    localStorage.removeItem('isSignedIn')
    window.location.reload();
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
    <button type='button' class="btn btn-outline-light" onClick={signOut}>
      <img src="icons/google.svg" height='40' width='40' alt="google login" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  )
}

export default LogoutHooks;