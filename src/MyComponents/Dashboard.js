import React from 'react'

export const Dashboard = (props) => {
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
    </>
  )
}
