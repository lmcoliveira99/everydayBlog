import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {

        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
    };

    return (
        <header>
            <a href="" className='logo'>My blog</a>
            <nav>
                {isLoggedIn ? (
                    <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;
