
import React from 'react';
import MeetupCard from "./MeetupCard";

const Meetups = props => {
    const meetups = props.meetups.map(meetup => <MeetupCard key={meetup.id} {...meetup} />)

    return (
        <div>
            {meetups}
        </div>
    );

};

export default Meetups;