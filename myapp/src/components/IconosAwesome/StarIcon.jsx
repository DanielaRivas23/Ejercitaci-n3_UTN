import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarIcon = () => {
    return (
    <p className='star'>
        < FontAwesomeIcon icon={faStar} style={{ color: '#eabe12' }} />
        < FontAwesomeIcon icon={faStar} style={{ color: '#eabe12' }} />
        < FontAwesomeIcon icon={faStar} style={{ color: '#eabe12' }} />
        < FontAwesomeIcon icon={faStar} style={{ color: '#eabe12' }} />
    </p>
    );
}

export default StarIcon;
