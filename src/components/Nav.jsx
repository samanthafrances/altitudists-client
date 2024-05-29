import React from 'react'
import { NavLink } from 'react-router-dom'
import DestinationDetails from '../pages/DestinationDetails'
import PinnedDestinations from '../pages/PinnedDestinations'
import BuddyPass from '../pages/BuddyPass'
import Icons from './icons'

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/home">
      <Icons icon="list" fill="white"/>
      </NavLink>
      <NavLink to="/destinationview">
      <Icons icon="favorites" fill="white"/>
      </NavLink>
      <NavLink to="/buddyPass">
      <Icons icon="ticket" fill="white"/>
        </NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut} user={props.user}>
        <Icons icon="logout" fill="white"/>
        </div>
      </NavLink>
    </nav>
  )
}

export default Nav