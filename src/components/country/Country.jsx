import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitCountries }) => {
    const [visited, setVisited] = useState(false)
    const { name, independent, flags, population } = country
    const { common } = name
    const { png } = flags
    const handleVisit = () => {
        setVisited(!visited)
        handleVisitCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img width={'370px'} height={'220px'} src={png} alt="" />
            <h3>Name: {common} </h3>
            <p>Independent: {independent ? 'Independent' : 'Not Free'}</p>
            <p>Population: {population}</p>
            <button className={visited ? 'btn-visited' : 'btn-notVisited'} onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;