import React, {  useState } from 'react';
import arrowBack from "../assets/Pictures/arrowBack.svg";
import arrowNext from "../assets/Pictures/arrowNext.svg";
import "../styles/Slide.css"


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1); /*Renvoie à la première image*/
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);/*Renvoie à la dernière image*/
    };
  
    return ( /*Permet d'afficher les flêches*/
        <section className='slider'>
           {length > 1 && (
              <img 
                src={ arrowBack } 
                onClick={ prevSlide } 
                className='left-arrow'
                alt="arrow left">

              </img>
           )}

           {length > 1 && (
              <img 
                  src={ arrowNext } 
                  onClick={ nextSlide } 
                  className='right-arrow '
                  alt="arrow right">

              </img>
           )}
           
          {slides.map((image, index) => {
            return (
              <div
                  className={index === current ? 'slider active' : 'slider'}
                  key={index}
                >
                  {index === current && (
                    <img src={image} alt='travel' className='image' />
                  )}
                  {index === current && length > 1 && (
                    <span className="number">
                      {current + 1}/{length}
                    </span> /*Afficher le nombre n'images*/
            )}
              </div>
            );
          })}
        </section>
      );
    };

    
    export default ImageSlider;