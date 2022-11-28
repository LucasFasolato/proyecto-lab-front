import {useState, useEffect} from 'react';
import './goToTopBttn.css';
import upArrow from './up-arrow.png'
import React from 'react'

function GoToTopBtnn() {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0)
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      let heightToHideFrom = 200;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      setHeight(winScroll);
  
      if (winScroll > heightToHideFrom) {  
           !isVisible && setIsVisible(true);
      } else {
           setIsVisible(false);
      }  
    };
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
    {
        isVisible && 
        <button
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            className='upArrow'
            data-aos="fade-in" data-aos-delay="100" data-aos-duration="300"
        >
            <img src={upArrow} alt='Flecha para volver arriba de todo' className='upArrow-img'/>
        </button>
    }
  </>
  );
}

export default GoToTopBtnn