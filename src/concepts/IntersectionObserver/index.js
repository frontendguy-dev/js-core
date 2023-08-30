import useIsOnScreen from "./utils/use-is-on-screen";
import "./layout.css";

const IntersectionObserverDemo = () => {
  const [isOnScreen, elementRef] = useIsOnScreen();

  return (
    <>
      <div className="container">
        <h4>Element visible : {isOnScreen ? 'Yes' : 'No'}</h4>
      </div>
      <div className="box" ref={elementRef}></div>
    </>
  );
};

export default IntersectionObserverDemo;
