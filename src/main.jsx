// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

//npm i clsx
// бібліотеку імпортуємо туди куди потрібна

// npm i sass

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// Назви компонентів пишуться з великих літер
// const MyComponent = () => {};
// з стрілчастою функцією

// const MyComponent = () => {
//   return <p>my component</p>;
// };

// const MyComponent2 = () => {
//   return <p>my component2</p>;
// };

// root.render(<MyComponent />); // так як що 1 компонент рендерити

// root.render(
//   <>
//     <MyComponent />
//     <MyComponent2 />
//   </>
// ); //так як що 2 компонента рендерити
