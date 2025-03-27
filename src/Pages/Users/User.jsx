import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const user = useLoaderData();
    return (
        <div className="Main user-page">
            <div>
                <Link to='/users'>Back</Link>
            </div>
            <h2>{user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>Age: {user.age}</h3>
            <img src={user.img} alt="avatar" />
        </div>
    )
}

export default User