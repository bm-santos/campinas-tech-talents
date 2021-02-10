import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'

const Login = () => {
    let inputUser = useRef<HTMLInputElement>(null)
    let inputPassword = useRef<HTMLInputElement>(null)

    const [user] = useState('bruno')
    const [password] = useState('123')


    const [logged, setLogged] = useState(false)
    const [unauthorized, setUnauthorized] = useState(false)

    const login = () => {
        const typedUser = inputUser.current?.value;
        const typedPassword = inputPassword.current?.value;

        if ((typedUser === user) && (typedPassword === password)) {
            setLogged(true)
        } else {
            setUnauthorized(true)
        }
    }

    return (
        <div className="geral">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <body className="text-center">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Login</h1>
                        <input ref={inputUser} type="user" id="inputEmail" className="form-control" placeholder="User" required />
                        <input ref={inputPassword} type="password" id="inputPassword" className="form-control" placeholder="Password" required /><br />
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={login}>Send</button>
                    </form>
                </main>

                {
                    logged &&
                    <Redirect to="/dashboard" />
                }
                {
                    unauthorized &&
                    <p>Unauthorized</p>
                }
            </body>

        </div>
    );
}

export default Login;