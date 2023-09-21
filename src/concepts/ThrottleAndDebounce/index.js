import React from "react";
import { useDebounce } from "./utils/useDebounce";
import { useThrottle } from "./utils/useThrottle";
import "./layout.css";

const ThrottleAndDebounce = () => {
  const [value, setValue] = React.useState("");
	
	// This will be called automatically on re render and useDebounce will run because of change in dependency array val of useEffect
  const debounceVal = useDebounce(value, 1000);
	const throttleVal = useThrottle(value, 1000);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className="demoBody">
      <h1>Throttle and Debounce</h1>
      <input
        style={{ border: "2px solid grey", borderRadius: "8px" }}
        onChange={handleChange}
      />
      <h2>Value : {value}</h2>
      <h2>Debounce val: {debounceVal}</h2>
			<h2>Throttle val: {throttleVal}</h2>
    </main>
  );
};

export default ThrottleAndDebounce;
