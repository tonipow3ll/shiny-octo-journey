import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedInLanding = () => { 
    const user: any = useAuth0();

    return(
        <>
        {/* {console.log(user.user.nickname)} */}
        <p>Welcome {user.user.nickname}</p>
        </>
    )
}

export default LoggedInLanding;