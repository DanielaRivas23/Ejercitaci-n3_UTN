import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const LightStarIcon = () => {
    return (
        <p className='light-star'>
            <FontAwesomeIcon icon={farStar} style={{ color: '#eabe12' }} />
        </p>
    );
}

export default LightStarIcon;
