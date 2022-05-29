import { faAreaChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const IconBanner = () => {
    return (
        <div className='lg:w-3/4'>
            <div>
            <FontAwesomeIcon icon={faAreaChart} />
            </div>
        </div>
    );
};

export default IconBanner;