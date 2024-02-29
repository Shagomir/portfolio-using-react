import { useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
