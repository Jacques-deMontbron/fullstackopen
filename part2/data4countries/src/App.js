import axios from "axios";
import { useEffect, useState } from "react";
import DisplayCountries from "./components/DisplayCountries";

const App = () => {
  const [searchFilter, setSearch] = useState('')
  const [allCountries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState("")

  let countries;
  if (showCountry) {
    countries = allCountries.filter(country => country.name.common === showCountry)
  }
  else {
    countries = searchFilter ? allCountries.filter(country => {
      const lcCountryName = country.name.common.toLowerCase()
      return lcCountryName.includes(searchFilter.toLowerCase())
    }) : []
  }


  const onClickShow = (country) => {
    return () => setShowCountry(country)
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all/`)
      .then(response => {
        console.log("All countries fetched")
        setCountries(response.data)
      })
  }, [])

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
    setShowCountry("")
  }

  return (
    <>
      findCountries: <input value={searchFilter} onChange={onChangeSearch}></input>
      <DisplayCountries
        countries={countries}
        searchFilter={searchFilter}
        onClickShow={onClickShow} />
    </>
  )
}

export default App;
