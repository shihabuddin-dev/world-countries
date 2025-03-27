
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const fetchCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  return res.json()
}

function App() {
  const countriesPromise = fetchCountries()

  return (
    <>
      <Suspense fallback={<h3>Loading World Data....</h3>}>

        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>


    </>
  )
}

export default App
