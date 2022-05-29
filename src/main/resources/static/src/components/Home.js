import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import User from './User';



function Home() {

    const adminUser = {
        email: "ect994@gmail.com",
        password: "1234"
    }

    const navigate = useNavigate();

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const login = details => {

        if (details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                name: details.name,
                email: details.email,
            });
            navigate('/');
        } else {
            setError("Details don't match!")
        }
    }

    const logout = () => {
        setUser({ name: "", email: "" });
    }

    return (
        <div className="home-page">                     
            {user.name !== '' ? (<button className="logout-button" onClick={logout}>Logout</button>) : ""}         
            <User user={user} login={login} error={error} />
        </div>
    )

}

export default Home;