import React from 'react';
export default ({date, location, description, time}) => {
    return (
        <li className={'Event'}>
            <h4 className="Event-date">{date}</h4>
            <div className="Event-main">
                <p className="Event-description">{description}</p>
                <p className="Event-location">Location: {location} @ {time}</p>
            </div>
        </li>
    );
}