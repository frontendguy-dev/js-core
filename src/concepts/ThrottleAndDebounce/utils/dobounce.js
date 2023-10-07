//vanilla js version

function debounce(cb, delay) {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
}

function throttle(cb, delay) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFunc = () => {
    if(!waitingArgs) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
