import { useEffect, useState } from "react";

export const useDelay = function ({
  isMounted,
  mountAnimation = { mount: null, unmount: null },
  delayTime,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animate, setAnimate] = useState({});
  useEffect(() => {
    let timer = null;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
      setAnimate({
        animationName: mountAnimation.mount,
        animationDuration: delayTime + "ms",
      });
    } else if (!isMounted && shouldRender) {
      setAnimate({
        animationName: mountAnimation.unmount,
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
    mountAnimation.mount,
    mountAnimation.unmount,
    delayTime,
    isMounted,
    shouldRender,
  ]);

  return [shouldRender, animate];
};
