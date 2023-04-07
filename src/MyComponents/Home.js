import React from 'react'
import { SignIn } from './SignIn';
import { Signup } from './Signup';
import axios from 'axios';

export const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  }

  // const handleLogoutClick = () => {
  //   axios
  //     .delete("http://localhost:3001/logout", { withCredentials: true })
  //     .then(response => {
  //       props.handleLogout();
  //     })
  //     .catch(error => {
  //       console.log("logout error", error);
  //     });
  // }

  return (
    <>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      {/* <button onClick={() => handleLogoutClick()}>Logout</button> */}
      <Signup handleSuccessfulAuth={handleSuccessfulAuth} />
      <SignIn handleSuccessfulAuth={handleSuccessfulAuth} />
    </>
  )
}

