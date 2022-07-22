// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollRouter = (props) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }, 100);
    }
  }, [pathname, hash, key]); // do this on route change

  return <>{props.children}</>;
};;

export default ScrollRouter;
