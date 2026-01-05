import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../../redux/authApiSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading, error, data }] = useLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [data, error]);

    // Redirection après login réussi
    useEffect(() => {
        if (data) {
            navigate("/"); // ← redirige vers Home
        }
    }, [data, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        //  le body de la requette
        const loginData = { email, password };
        login(loginData);
    };
    return (
        <>
            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-5">
                    <form
                        className="shadow rounded bg-body p-4"
                        onSubmit={submitHandler}
                    >
                        <h2 className="mb-4 text-center">Login</h2>

                        <div className="mb-3">
                            <label htmlFor="email_field" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="password_field"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Link to="/password/forgot" className="float-end mb-4">
                            Forgot Password?
                        </Link>

                        <button
                            disabled={isLoading}
                            id="login_button"
                            type="submit"
                            className="btn-outline-primary w-100 py-2"
                        >
                            {isLoading ? "Authenticating..." : "Login"}
                        </button>

                        <div className="my-3 text-center">
                            <Link to="/register">New User?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
