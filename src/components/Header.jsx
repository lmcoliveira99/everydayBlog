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
            <Link to="/" className='logo'>My blog</Link>
            <nav>
                {isLoggedIn ? (
                    <>
                        <button className="header-btn"><Link to="/create">Create new post</Link></button>
                        <button className="header-btn" onClick={handleLogout}>Log Out</button>
                    </>
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