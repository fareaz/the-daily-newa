import React from 'react';
import SocialLogin from './SocialLogin';
import QZone from './QZone';
import FindUs from './FindUs';

const AsideRight = () => {
    return (
        <div className='space-y-8'>
             <SocialLogin></SocialLogin>
             <FindUs></FindUs>
             <QZone></QZone>
        </div>
    );
};

export default AsideRight;