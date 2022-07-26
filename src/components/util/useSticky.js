import { useEffect, useState, useRef } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);

  const element = useRef();

  // This function handle the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  useEffect(() => {
    const handleScroll = () => {
      // const bottom = element.current?.getBoundingClientRect().bottom;
      const top = element.current?.getBoundingClientRect().top;
      // Check if nav is mounting/mounted
      // const wasSticky = element.current?.getAttribute("class");
      top < 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [/*debounce,*/]);

  return { isSticky, element };
}

export default useSticky;
