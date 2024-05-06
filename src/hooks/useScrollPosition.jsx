
import { useState, useEffect, useRef } from 'react'

const useScrollPosition = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const scrollRef = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling...')
      const bottom = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const scrollPosition = scrollRef.current.scrollTop;
      console.log('posicion del scroll: ', scrollPosition);
      console.log('altura del documento: ',bottom);
      if (scrollPosition >= bottom) {
        setIsButtonDisabled(false);
        console.log("scroll al final");
      } else {
        setIsButtonDisabled(true);
        console.log("scroll no al final")
      }
    };

    const targetElement = scrollRef.current;
    
    if(targetElement){
      targetElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if(targetElement) {
        targetElement.removeEventListener('scroll', handleScroll);
      }
    }
 }, [scrollRef]);

 return isButtonDisabled;
};

export default useScrollPosition;