import {useEffect, useState} from 'react';

export const useDelayUnmount = ({isMount, delay, mountStyle = {mount: null, unmount: null}}) => {
    const [shouldRender, setShouldRender] = useState(false)
    const [animateStyle, setAnimateStyle] = useState({})
    useEffect(() => {
        let timer = null
        if (isMount) {
            setShouldRender(isMount)
            setAnimateStyle({
                animationName: mountStyle.mount,
                animationDuration: delay + "ms"
            })
        } else {
            setAnimateStyle({
                animationName: mountStyle.unmount,
                animationDuration: delay + "ms"
            })
            timer = setTimeout(() => {
                setShouldRender(isMount)
            }, delay)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isMount, delay, mountStyle.mount, mountStyle.unmount])
    return [shouldRender, animateStyle]
}