import React from 'react';

const Anete = (props : { scooter: string }) => {
    return (
        <div>
            Sveika Anete
            How was your Ride?
            <div>
                my ride was {props.scooter}
            </div>
        </div>
    )
}

export const Sveika = () => {
    return (
        <Anete scooter="Good" />
    )
}