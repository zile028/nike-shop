import { useEffect, useState } from "react";

export const useDelay = function ({
  isMounted,
  animationName = { start: null, end: null },
  delayTime,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animate, setAnimate] = useState({});
  useEffect(() => {
    let timer = null;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
      setAnimate({
        animationName: animationName.start,
        animationDuration: delayTime + "ms",
      });
    } else if (!isMounted && shouldRender) {
      setAnimate({
        animationName: animationName.end,
        animationDuration: delayTime + "ms",
      });
      timer = setTimeout(() => {
        setShouldRender(false);
      }, delayTime);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [
    animationName.end,
    animationName.start,
    delayTime,
    isMounted,
    shouldRender,
  ]);

  return [shouldRender, animate];
};
