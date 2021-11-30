import React, { Fragment } from "react";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //  Link,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <nav>
            {/* <ul>
              <li>
                <Link to="/"> </Link>{" "}
              </li>
            </ul> */}
            <header>
              <h1 className="my-3">Todo App by NguyenHaiDev</h1>
            </header>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
