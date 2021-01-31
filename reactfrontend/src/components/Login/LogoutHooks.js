import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '927460782630-si9oujoue6sd7rhlm546cai5e38g5sct.apps.googleusercontent.com'

const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY
const SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY

//Creation of logger for LoginHooks.js
const { Logger } = require('aws-cloudwatch-log-browser')
const config = {
  logGroupName: 'cc-a2-logger', 
	logStreamName: 'cc-a2-login-stream', 
	region: 'us-east-1', 
	accessKeyId: ACCESS_KEY, 
	secretAccessKey: SECRET_KEY, 
	uploadFreq: 2000,
	local: false
}
const logger = new Logger(config)

const LogoutHooks = () => {

  const onLogoutSuccess = (response) => {
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

  const logUser = () => {
    logger.log("User Logged in: " + localStorage.getItem('googleUser'));
  }

  return (
    <button type='button' className="btn btn-outline-light" onClick={signOut} onLoad={logUser}>
      <img src="https://cc-assignment02-bucket.s3.amazonaws.com/images/google.svg" height='40' width='40' alt="google login" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  )
}

export default LogoutHooks;