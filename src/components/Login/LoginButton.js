import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './LoginButton.css'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className='cloud' onClick={() => loginWithRedirect()}>Log In</button>
      );
}
 
export default LoginButton ;