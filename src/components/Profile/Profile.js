import React, {useState, useEffect} from "react";
//import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({user, isAuthenticated, getAccessTokenSilently}) => {
    //const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetaData, setUserMetaData] = useState(null);

    useEffect(() => {
        const getUserMetaData = async () => {
            const domain = 'dev-hxalui1hy23ogq1k.eu.auth0.com';
            
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2`,
                    scope: "read:current_user"
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  });

                const { user_metadata } = await metadataResponse.json();

                setUserMetaData(user_metadata);
            }

            catch (e) {
                console.log(e.message)
            }
        };
        getUserMetaData();
    }, [getAccessTokenSilently, user?.sub]);

    console.log(user)

    return ( 
        isAuthenticated && (
        <div>
        <img src={user.picture} alt={user.name}></img>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetaData ? (
            <pre>{JSON.stringify(userMetaData, null, 2)}</pre>
        ) : (
            "No user metadata defined"
        )}

        </div>
        )
    );
};
 
export default Profile;