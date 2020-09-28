import React, {useState, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../../App';

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const postData = () => {
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            console.log("Invalid email !");
            return;
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    console.log("All the field are required");
                }
                else {
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    dispatch({type: "USER", payload: data.user});
                    console.log("Successfuly sign in !");
                    history.push("/");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h1>Sign in</h1>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className="btn waves-effect waves-light blue lighten-2" onClick={postData}>
                    Login
                </button>
                <h6>
                    <Link to="/signup">Don't have an account ?</Link>
                </h6>
            </div>
        </div>
    )
}

export default Login;