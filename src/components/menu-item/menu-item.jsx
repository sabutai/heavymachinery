import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div
        className='menu-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
    </div>
)

export default withRouter(MenuItem);