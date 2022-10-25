import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom";
import '../../styles/App.css'
import { GetBaseUrl } from "../../utils/Login.utils";
import Login from './Login.controller'

function LoginForm({ error, setError, setUser }) {
    const [details, setDetails] = useState({
        username: "",
        password: ""
    });

    const submitHandler = async (e) => {
        e.preventDefault();

        if(await Login(details, setUser, setError)) window.location.href = GetBaseUrl();
    }

    return (
        <form className="login-form" onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} className="form-control" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="text" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} className="form-control" />
                </div>
            </div>
            <input type="submit" value="Login" className="btn btn-light" />
            <p className="login-error-message">{(error != "") ? (error) : ("")}</p>
        </form>
    )
}

export default LoginForm