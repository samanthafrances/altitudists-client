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
        <Icons icon={<FontAwesomeIcon icon="list" />} fill="white"/>
      </NavLink>
      <NavLink to="/pinneddestinations">
  <Icons icon={<FontAwesomeIcon icon="star" />} fill="white"/>
</NavLink>
<NavLink to="/buddypass">
  <Icons icon={<FontAwesomeIcon icon="ticket" />} fill="white"/>
</NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut} user={props.user}>
          <Icons icon={<FontAwesomeIcon icon="sign-out-alt" />} fill="white"/>
        </div>
      </NavLink>
    </nav>
  )
}

export default Nav