import React from 'react'
import { useGoogleLogin } from 'react-google-login'

// refresh token
import { refreshTokenSetup } from './refreshToken'

const clientId =
  '927460782630-si9oujoue6sd7rhlm546cai5e38g5sct.apps.googleusercontent.com'

function LoginHooks() {
  const onSuccess = (response) => {
    console.log('User:', response.profileObj)
    alert(`Logged in successfully welcome ${response.profileObj.name}`)
    refreshTokenSetup(response)
  };

  const onFailure = (response) => {
    console.log('Login failed:', response)
    alert(`Failed to login`)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  })

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />
      <span className="buttonText">Sign in with Google</span>
    </button>
  )
}

export default LoginHooks;