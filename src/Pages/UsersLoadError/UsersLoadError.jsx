import React from "react";
import { Link } from "react-router-dom";

const UsersLoadError = () => {
    return (
        <div className="Main">
            <div>
                <Link to='/users'>Back</Link>
            </div>
            <h2>Failed to load users.</h2>
        </div>
    )
}

export default UsersLoadError