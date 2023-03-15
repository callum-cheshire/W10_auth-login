import { useAuth0 } from "@auth0/auth0-react";
// import'./heading.css';

const Mission = () => {
    const { isAuthenticated } = useAuth0();

    return ( 
        isAuthenticated && 
        <div>
            <h1 className="loggedIn">Your mission is...</h1>
            <p>Location: Prague</p>
            <p>Target: Prag</p>
            <p>Location: Prague</p>
        </div>
    );
}
 
export default Mission;