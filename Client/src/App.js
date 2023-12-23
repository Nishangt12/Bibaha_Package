import React from 'react';
import store from './store.js'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loadUser } from './actions/userAction';
import Profile from './components/User/profile.jsx'
import UpdateProfile from './components/User/UpdateProfile.jsx'
import UpdatePassword from './components/User/UpdatePassword'


function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
   
    store.dispatch(loadUser());
  });

  return( 
  <>
    <Router>
  <Navbar/>
      <Routes>
        <Route path="/"  exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Signup/>} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/account" exact element={<Profile />} />
        <Route path="/me/update" exact element={<UpdateProfile />} />
        <Route path="/password/update" exact element={<UpdatePassword />} />

      </Routes>
  <Footer/>
  </Router>
  </>
  );
}

export default App;
