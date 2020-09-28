import React, {createContext, useReducer} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';
import { userReducer, initialState } from './reducers/userReducer';
import Footer from './components/Footer';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
