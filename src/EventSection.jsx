import React from 'react';
import Event from './Event';

export default ({events}) => {
    return Object.keys(events).map(month => {
        return (
            <div key={month}>
            <h3 className="Month">{month}</h3>
            <ul className="Events">
                {events[month].map(event => {
                    return <Event {...event} key={event.date} />
                })}
            </ul>
        </div>
        );
    });
}

