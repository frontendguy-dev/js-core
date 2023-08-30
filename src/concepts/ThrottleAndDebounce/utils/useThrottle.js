import React from "react";

export const useThrottle = (value, delay=500) => {
  const [throttleVal, setThrottleVal] = React.useState(value);
  const lastExecuted = React.useRef(Date.now());

  React.useEffect(() => {
    let timerId = null;
    if (Date.now() >= lastExecuted.current + delay) {
      setThrottleVal(value);
      lastExecuted.current = Date.now();
    } else {
      timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottleVal(value);
      }, delay);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return throttleVal;
};
