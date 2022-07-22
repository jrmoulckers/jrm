import React, { Fragment } from "react";
import useSticky from "../util/useSticky";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

function Navigation(props) {
  const { isSticky, element } = useSticky();

  return (
    <Fragment>
      <NavMenu redirects={null} sticky={isSticky} element={element} />
      <BurgerMenu redirects={null} sticky={isSticky} />
    </Fragment>
  );
}

export default Navigation;
