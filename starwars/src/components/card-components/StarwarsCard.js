import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarwarsProps from './StarwarsProps';

const StarwarsCard = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                const card = response.data.results;
                console.log(card);
                setCard([...card]);

                
            })
            .catch(error => {
                console.log('Error message: ', error);
            })
    }, []);

    return (
        <div className='cardContainer'>
            {card.map((prop, index) => {
                return (
                    <StarwarsProps 
                        key={index}
                        name={prop.name}
                        birth_year={prop.birth_year}
                        gender={prop.gender}
                        hair_color={prop.hair_color}
                        skin_color={prop.skin_color}
                        height={prop.height}
                        mass={prop.mass}
                    />
                )
            })}
        </div>
    )
}
export default StarwarsCard;