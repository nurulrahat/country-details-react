import React from 'react';
import './country.css';
const Country = (props) => {
    const {name,capital,population,flag} = props.country;
    return (
        <div className="countryDetails">
            
                <img src={flag} alt=""/>
            <h2>{name}</h2>
                <h3>Capital: {capital}</h3>
                <h3>Population: {population}</h3> 
         
            
        </div>
    );
};

export default Country;