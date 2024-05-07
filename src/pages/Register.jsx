import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import authService from "../services/auth.service";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { register } = authService;

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const reqBody = { email, password };

        register(reqBody)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
                const errorDescription = error.message;
                setError(errorDescription);
            });
    };

    return (
        <div className="register-card">
            <form onSubmit={handleRegisterSubmit}>
                <h1 className="title">Register</h1>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                <div className="login-link">
                    <Link to="/login">Already a user?</Link>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div >
    );
}

export default Register;