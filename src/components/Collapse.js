import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react";
import "../styles/Collapse.css";
import arrow from "../assets/arrow_collaspe.svg";




function Collapse({ content, title }) {

    return (
        /*<article className='CaseList'>
          <h3>{title}</h3>
            <p onClick={toggle}>

              {open ? (
                <i> <FontAwesomeIcon icon={faAngleUp}  className='icon'/></i>
                ) : (
                <i><FontAwesomeIcon icon={faAngleDown} className='iconDown'/></i>
                )}
            </p>

            {open && (
            
                <p className='content'>{content}</p>
      
         )}
        </article>*/

        <details className='CasePosition'>
          <summary className='CaseList'>
            <span>{title}</span>
            <img src={arrow} alt="arrow"></img>
          </summary>
      
          <p className='content'>{content}</p>

        </details>

    );
  }
  
  export default Collapse;
  