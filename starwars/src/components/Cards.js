import React from 'react';

export function Card(props) {
    return (
        <div className='card'>
            <h1>{props.name}</h1>
            <p>{'Gender: '+props.gender}</p>
            <p>{'Birthday: '+props.birth}</p>
            <p>{'Height: '+props.height}</p>
            <p>{'Eye Color: '+props.eyes}</p>
        </div>
    )
}