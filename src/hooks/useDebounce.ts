import { useCallback, useRef } from "react";

export default function useDebounce(callback: any, deplay: any) {
  const timer: any = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, deplay);
    },
    [callback, deplay]
  );
  return debouncedCallback;
}
