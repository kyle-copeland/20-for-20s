import React from 'react';

const DEFAULT_TIME = '6:30pm';
const DEFAULT_LOCATION = '26 Burning Tree, Newport Beach';

export default ({date, location, description, time, podcast}) => {
    return (
        <li className={'Event'}>
            <div className="Event-start">
                <h4 className="Event-date">{date}</h4>
                <p className="Event-time">{time || DEFAULT_TIME}</p>
            </div>
            <div className="Event-main">
                <p className="Event-description">{description}</p>
                <p className="Event-location">{location || DEFAULT_LOCATION}</p>
                {podcast && <a className="Event-podcast" href={podcast}>Podcast</a>}
            </div>
        </li>
    );
}