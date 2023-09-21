import SideNav from './components/SideNav';
import "./App.css";
// import ThrottleAndDebounce from "./concepts/ThrottleAndDebounce";
// import IntersectionObserverDemo from "./concepts/IntersectionObserver";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
				<SideNav />
			</div>
			<div className="content"></div>
    </div>
  );
}

export default App;
