import React from 'react';
import { Card } from 'semantic-ui-react';
import './CardsDiv.css';
import './CardsDiv.scss';


export function ACard(props) {
    return (
        <Card className='card'>
            <h1>{props.name}</h1>
            <p>{'Gender: '+props.gender}</p>
            <p>{'Birthday: '+props.birth}</p>
            <p>{'Height: '+props.height}</p>
            <p>{'Eye Color: '+props.eyes}</p>
        </Card>
    )
}