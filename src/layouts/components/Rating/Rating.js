import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function Rating() {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} style={{color: '#d26e4b'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#d26e4b'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#d26e4b'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#d26e4b'}}/>
            <FontAwesomeIcon icon={faStar} style={{color: '#d26e4b'}}/>
        </div>
    );
}

export default Rating;