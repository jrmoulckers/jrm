import React, { Fragment } from "react";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

function Navigation(props) {
  return (
    <Fragment>
      <NavMenu redirects={null} sticky={props.sticky} element={props.element} />
      <BurgerMenu redirects={null} sticky={props.sticky} />
    </Fragment>
  );
}

export default Navigation;
