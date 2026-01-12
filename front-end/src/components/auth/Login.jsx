import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../../redux/authApiSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading, error, data, isSuccess }] = useLoginMutation();
    const navigate = useNavigate();

    // // Affiche les erreurs si elles existent
    useEffect(() => {
        if (error) {
            console.log(error?.data.message || "Erreur login");
        }
    }, [error]);

    // Redirection après login réussi
    useEffect(() => {
        if (isSuccess && data) {
            //  connexion reussie
            // stocker token et user
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Redirection selon rôle
            if (data.user.isAdmin) {
                navigate("/admin/users"); // ou "/admin" pour landing admin
            } else {
                navigate("/"); // utilisateur normal
            }
        }
    }, [isSuccess, data, navigate]);
    // chat gpt
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Appel de l'API avec RTK Query
            await login({ email, password }).unwrap();
            // La redirection se fera automatiquement dans useEffect
        } catch (err) {
            console.error(err);
            alert(err?.data?.message || "Erreur login");
        }
    };
    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-5">
                <form
                    className="shadow rounded bg-body p-4"
                    onSubmit={handleSubmit}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password_field" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/password/forgot">Forgot Password?</Link>
                    </div>
                    <button
                        disabled={isLoading}
                        id="login_button"
                        type="submit"
                        className="btn-primary w-full py-2 mb-3"
                    >
                        {isLoading ? "Authenticating..." : "Login"}
                    </button>
                    <div className="d-flex justify-content-end mt-2">
                        <Link to="/register">New User?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
