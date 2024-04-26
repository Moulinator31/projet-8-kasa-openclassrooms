import "../styles/Collapse.css";
import arrow from "../assets/Pictures/arrowDown.png";



function Collapse({ content, title }) {

    return (
      <div className='CasePosition'>
        <details>
          <summary className='CaseList'>
            <span>{title}</span>
            <img src={arrow} alt="arrow"></img>
          </summary>
        </details>
          <div className="content policeContent">
          <div className="content-inner">{content}</div>
          </div>
      </div>
    );
  }
  
  export default Collapse;