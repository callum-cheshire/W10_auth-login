import { useAuth0 } from "@auth0/auth0-react";
import'./heading.css';

const Heading = () => {
    const { isAuthenticated } = useAuth0();

    return ( 
        isAuthenticated ? <h1 className="loggedIn">Welcome to the matrix</h1> : <h1 className="loggedOut">Find your next holiday here!</h1>
    );
}
 
export default Heading;