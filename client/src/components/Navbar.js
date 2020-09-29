import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history.push('/login');
    }

    const renderList = () => {
        if (state) {
            return [
                <li key={''}><Link to="/">Home</Link></li>,
                <li key={'private1'}><Link to="/private1">Private section 1</Link></li>,
                <li key={'private2'}><Link to="/private2">Private section 2</Link></li>,
                <li key={'private3'}><Link to="/private3">Private section 3</Link></li>,
                <li key={'login'}>
                    <button className="btn waves-effect waves-light gray lighten-2" onClick={logout}>
                        Logout
                    </button>
                </li>
            ];
        }
        else {
            return [
                <li key={''}><Link to="/">Home</Link></li>,
                <li key={'signup'}><Link to="/signup">Sign up</Link></li>,
                <li key={'login'}><Link to="/login">Login</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white">

                <Link to={state ? "/": "/login"} className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;