import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMountains, faMessages, faAdd, faCheck, faTicket, faPassport, faSignOut, faList, faHeart, faUser, faArrowUp, faForward } from "@fortawesome/pro-solid-svg-icons";

const FontAwesome = (props) => {
  const icons = {
    user: faUser,
    mountains: faMountains,
    messages: faMessages,
    add: faAdd,
    check: faCheck,
    passport: faPassport,
    ticket: faTicket,
    logout: faSignOut,
    list: faList,
    favorites: faHeart,
    newUser: faUser,
    arrow: faArrowUp,
    forward: faForward,
  };

  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon icon={icons[props.icon]} size={props.size} color={props.color} />
    </div>
  );
};

export default FontAwesome;