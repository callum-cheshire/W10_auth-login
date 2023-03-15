import './App.css';
import Profile from '../Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from '../Authentication/authenticationButton'
import Navbar from '../Navbar/Navbar.js'

function App() {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <div className={isAuthenticated ? "secret" : "app"}>
    <Navbar />
    <AuthenticationButton />
    <div className='profile-container'>
      <Profile user={user} isAuthenticated={isAuthenticated} getAccessTokenSilently={getAccessTokenSilently}/>
    </div>
    </div>
  );
}

export default App;
