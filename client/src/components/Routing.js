import React, { useEffect, useContext } from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {UserContext} from '../App';
import Private1 from './screens/Private1';
import Private2 from './screens/Private2';
import Private3 from './screens/Private3';

const Routing = () => {
    const history = useHistory();
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) {
            dispatch({ type: "USER", payload: user });
            history.push('/');
        }
        else {
            history.push('/login');
        }
    }, [])
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/private1"><Private1 /></Route>
            <Route path="/private2"><Private2 /></Route>
            <Route path="/private3"><Private3 /></Route>
        </Switch>
    )
}

export default Routing;