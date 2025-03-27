import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitCountries }) => {
    const [visited, setVisited] = useState(false)
    const { name, independent, flags, population, continents } = country
    const { common, official } = name
    const { png, alt } = flags
    const handleVisit = () => {
        setVisited(!visited)
        handleVisitCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img width={'370px'} height={'220px'} src={png} alt={alt} />
            <h3>Name: {common} </h3>
            <p>Continents: {continents} || {independent ? 'Independent' : 'Not Independent'}</p>
            <p> Population: {population}</p>
            <p>Official Name: {official}</p>
            <button className={visited ? 'btn-visited' : 'btn-notVisited'} onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;