import React, { useState, useEffect } from "react";
import { useRegisterMutation } from "../../redux/authApiSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const { username, email, password } = user;
    const [register, { isLoading, error, data, isSuccess }] =
        useRegisterMutation();
    //  quand tout est ok
    useEffect(() => {
        if (isSuccess) {
            navigate("/login");
        }
    }, [isSuccess, navigate]);
    //  affiche l'error
    useEffect(() => {
        if (error) {
            console.log(error?.data?.message);
        }
    }, [error]);
    const submitHandler = (e) => {
        e.preventDefault();
        //  body est (username, email, password)
        const signupData = { username, email, password };
        register(signupData);
    };
    const onChange = (e) => {
        //    on cible chaque input et on lui donne la nouvel valeur
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-5">
                    <form
                        className="shadow rounded bg-body p-4"
                        onSubmit={submitHandler}
                    >
                        <h2 className="mb-4 text-center">Register</h2>
                        <div className="mb-3">
                            <label htmlFor="name_field" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChange}
                            />
                        </div>
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
                                onChange={onChange}
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
                                onChange={onChange}
                            />
                        </div>

                        {/* Bouton Login centré et pleine largeur */}
                        <button
                            disabled={isLoading}
                            id="login_button"
                            type="submit"
                            className="btn-primary w-full py-2 mb-3"
                        >
                            {" "}
                            {isLoading ? "Creating..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
