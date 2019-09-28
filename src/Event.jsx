import React from 'react';

const DEFAULT_TIME = '6:30pm';
const DEFAULT_LOCATION = 'The Vance\'s House';

export default ({date, location, description, time}) => {
    return (
        <li className={'Event'}>
            <h4 className="Event-date">{date}</h4>
            <div className="Event-main">
                <p className="Event-description">{description}</p>
                <p className="Event-location">{location || DEFAULT_LOCATION} @ {time || DEFAULT_TIME}</p>
            </div>
        </li>
    );
}