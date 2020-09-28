import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const postData = () => {
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
            console.log("Invalid email !");
            return;
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log("All the field are required");
            }
            else {
                console.log(data.message);
                history.push("/login");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h1>Sign up</h1>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
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
                <div>

                </div>
                <button className="btn waves-effect waves-light blue lighten-2" onClick={postData}>
                    Sign up
                </button>
                <h6>
                    <Link to="/login">Already have an account ?</Link>
                </h6>
            </div>
        </div>
    )
}

export default Signup;