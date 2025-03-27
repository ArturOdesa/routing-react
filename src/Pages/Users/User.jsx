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
            <h3>Phone: {user.phone}</h3>
            <address>Address: {user.address.city}, {user.address.street}, {user.address.suite}</address>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default User