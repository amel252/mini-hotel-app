import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../../redux/authApiSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading, error, data, isSuccess }] = useLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            console.log(error?.data.message);
        }
    }, [error]);

    // Redirection après login réussi
    useEffect(() => {
        if (isSuccess) {
            //  connexion reussie
            navigate("/"); // ← redirige vers Home
        }
    }, [isSuccess, navigate]);
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
                        {/* Forgot Password à droite */}
                        <div className="d-flex justify-content-end mb-3">
                            <Link
                                to="/password/forgot"
                                className="float-end mb-2"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        {/* Bouton Login centré et pleine largeur */}
                        <button
                            disabled={isLoading}
                            id="login_button"
                            type="submit"
                            className="btn-primary w-full py-2 mb-3"
                        >
                            {" "}
                            {isLoading ? "Authenticating..." : "Login"}
                        </button>
                        <div className="d-flex justify-content-end mt-2">
                            <Link to="/register">New User?</Link>
                        </div>{" "}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
