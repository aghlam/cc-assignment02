import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId = '927460782630-si9oujoue6sd7rhlm546cai5e38g5sct.apps.googleusercontent.com'

function LoginHooks() {

  

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    localStorage.setItem('googleUser', res.profileObj.name)
    localStorage.setItem('isSignedIn', true)
    alert(
      `Logged in successfully welcome ${res.profileObj.name}.`
    );
    refreshTokenSetup(res);
    window.location.reload();
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button type='button' className="btn btn-outline-light" onClick={signIn} >
      <img src="https://cc-assignment02-bucket.s3.amazonaws.com/images/google.svg" height='40' width='40' alt="google login" className="icon" />
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;