import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <a href="" className='logo'>My blog</a>
            <nav>
                <Link to="/About">About Me </Link>
            </nav>
        </header>
    )
}

export default Header