import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import authService from "../services/auth.service";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { saveToken, authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const { login } = authService;

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        setLoading(true);

        const reqBody = { email, password };

        login(reqBody)
            .then((response) => {
                saveToken(response.data.authToken);
                authenticateUser();
                navigate("/home");
            })
            .catch((error) => {
                const errorDescription = error.data.message;
                setError(errorDescription);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='register-card'>
            <h1 className='title'>Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>Login</button>
                <div className="login-link"><Link to="/register">Don`t have an account?</Link></div>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Login;