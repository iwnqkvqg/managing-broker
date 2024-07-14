import { useEffect, useRef, useState } from "react";

function useDebounce<T>(value: T, delay: number = 200): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
