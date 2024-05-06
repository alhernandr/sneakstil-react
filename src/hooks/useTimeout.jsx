import { useEffect } from "react";

const useTimeout = (callback, delay) => {
  useEffect(() => {
    const id = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
};

export default useTimeout;