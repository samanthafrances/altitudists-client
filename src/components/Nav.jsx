import React from 'react'
import { NavLink } from 'react-router-dom'
import DestinationDetails from '../pages/DestinationDetails'
import PinnedDestinations from '../pages/PinnedDestinations'
import BuddyPass from '../pages/BuddyPass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/home">
      <FontAwesomeIcon icon="sign-out-alt" /> 
      </NavLink>
      <NavLink to="/pinneddestinations">
      <FontAwesomeIcon icon="sign-out-alt" /> 
      </NavLink>
      <NavLink to="/buddyPass">
        <FontAwesomeIcon icon="sign-out-alt" /> 
        </NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut} user={props.user}>
        <FontAwesomeIcon icon="sign-out-alt" /> 
        </div>
      </NavLink>
    </nav>
  )
}

export default Nav