import DisplayCountryDetails from "./DisplayCountryDetails"
import DisplayTenCountries from "./DisplayTenCountries"

const DisplayCountries = ({ countries, searchFilter }) => {
    if (!searchFilter)
        return

    if (countries.length === 1) {
        //console.log("countries.length === 1:", countries)
        return (
            <DisplayCountryDetails country={countries.pop()} />
        )
    } else if (countries.length > 1 && countries.length <= 10) {
        // console.log("1 < countries.length < 10:", countries)
        return <DisplayTenCountries countries={countries} />
    }
    else if (countries.length > 10) {
        // console.log("countries.length > 10:", countries)
        return (
            <div>
                <em>Too many matches, specify another filter</em>
            </div>
        )
    }
    else if (countries.length === 0) {
        // console.log("countries.length === 0:", countries)
        return (
            <div>
                <em>No country found with the name containing {searchFilter}</em>
            </div>
        )
    }
}

export default DisplayCountries