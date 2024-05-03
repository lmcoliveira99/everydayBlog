import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <a href="" className='logo'>My blog</a>
            <nav>
                <Link to="/About">About Me </Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}

export default Header