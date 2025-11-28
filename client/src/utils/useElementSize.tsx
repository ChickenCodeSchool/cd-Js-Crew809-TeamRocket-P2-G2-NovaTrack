import { useState, useEffect } from "react";
type ElementSize = {
  width: number;
  height: number;
};
function useElementSize(el: string): ElementSize {
  const element = document.querySelector(el) as HTMLElement | null;

  const [elSize, setElSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    element &&
      setElSize({
        width: element.clientWidth,
        height: element.clientHeight,
      });
  }, [element]);

  return elSize;
}

export default useElementSize;
