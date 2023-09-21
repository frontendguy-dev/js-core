import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import IntersectionObserverDemo from "../../concepts/IntersectionObserver/index";
import ThrottleAndDebounce from "../../concepts/ThrottleAndDebounce/index";

import "./sideNav.css";

const SideNav = () => {
  return (
    <>
      <h2 className="header">Content</h2>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Debounce and Throttle</Link>
              </li>
              <li>
                <Link to="/intersectionObserver">Intersection observer</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/intersectionObserver"
              element={<IntersectionObserverDemo />}
            />
            <Route path="/" element={<ThrottleAndDebounce />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default SideNav;
