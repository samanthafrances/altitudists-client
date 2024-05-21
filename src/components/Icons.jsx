import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faCheck, faTicket, faSignOutAlt, faList, faStar, faUser } from "@fortawesome/fontawesome-pro-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = (props) => {
  library.add(faPlus, faCheck, faTicket, faSignOutAlt, faList, faStar, faUser);

  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon icon={["fas", props.icon]} size="2x" color={props.color} />
    </div>
  );
};

export default Icons;