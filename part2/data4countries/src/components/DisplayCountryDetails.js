import DisplayCapitalWeather from "./DisplayCapitalWeather"
import DisplayCountryGenerics from "./DisplayCountryGenerics"

const DisplayCountryDetails = ({ country }) => {
    return (
        <>
            <DisplayCountryGenerics
                countryName={country.name.common}
                capitalName={country.capital[0]}
                area={country.area}
                languages={country.languages}
                flag={country.flags.png}
            />
            <DisplayCapitalWeather
                capitalName={country.capital[0]}
                capitalLatLng={country.capitalInfo.latlng}
            />
        </>
    )
    // }
}

export default DisplayCountryDetails