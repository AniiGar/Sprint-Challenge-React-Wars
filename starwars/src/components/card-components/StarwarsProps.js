import React from 'react';

const StarwarsProps = (props) => {
    return (
        <div className='characterCard' key={props.id}>
            <h2 className='headName'>{props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin: {props.skin_color}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    )
}

export default StarwarsProps;