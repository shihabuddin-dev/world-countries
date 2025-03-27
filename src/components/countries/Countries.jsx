import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }
    const countries = use(countriesPromise)
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(visit => <li>{visit.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitCountries={handleVisitCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;