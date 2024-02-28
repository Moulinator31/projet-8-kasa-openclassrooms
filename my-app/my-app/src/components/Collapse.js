import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

onClick={this.onClickHandler}

function Collapse({ content, title }) {
    
    return (
        <li> {title} <FontAwesomeIcon icon={faAngleUp} className='icon'/></li>
    );
  }
  
  export default Collapse;
  