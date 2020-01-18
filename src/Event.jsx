import React from 'react';

const DEFAULT_TIME = '6:30pm';
const DEFAULT_LOCATION = '26 Burning Tree, Newport Beach';

export default ({date, location, description, time, podcast, moreInfo, details}) => {
    console.log(date);
    const formattedDate = new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'}).format(new Date(date)); 
    return (
        <li className={'Event'}>
            <div className="Event-start">
                <h4 className="Event-date u-no-margin">
                    {formattedDate}
                </h4>
                <p className="Event-time u-no-margin">{time || DEFAULT_TIME}</p>
            </div>
            <div className="Event-main">
                <p className="Event-description u-no-margin">{description}</p>
                {details && <p className="Event-details u-no-margin">{details}</p>}
                <p className="Event-location u-no-margin">{location || DEFAULT_LOCATION}</p>
                {podcast && <a className="Event-podcast u-no-margin" href={podcast}>Podcast</a>}
                {moreInfo && <a className="Event-moreInfo u-no-margin" href={moreInfo}>More Info</a>}
            </div>
        </li>
    );
}