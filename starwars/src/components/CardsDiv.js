import React from 'react';
import { Card } from './Cards';

const CardsDiv = (props) => {
    return (
        <div className='cards'>
            {props.data.map((item, index) => {
                return (
                <Card   key={index} name={item.name} birth={item.birth_year} 
                        gender={item.gender} height={item.height} eyes={item.eye_color}/>
                )
            })}
        </div>    
    )
}
export default CardsDiv;