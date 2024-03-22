import { useEffect } from "react";

// const fechTours = async () =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(tours), 2000);
//   });

const Header = () => {
  useEffect(() => {
    // addEventListener
    // setTimeout
    // setInterval

    return () => {
      console.log("work");
      //   removeEventListener();
      // clearTimeout();
      //   clearInterval()
    };
  }, []);

  return (
    <header>
      <p>Hello</p>
    </header>
  );
};

export default Header;
