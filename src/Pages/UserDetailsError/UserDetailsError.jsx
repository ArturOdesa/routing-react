import React from "react";
import { Link } from "react-router-dom";

const UserDetailsError = () => {
    return (
        <div className="Main">
            <div>
                <Link to='/users'>Back</Link>
            </div>
            <h2>User you needed doesn't exist.</h2>
        </div>
    )
}

export default UserDetailsError