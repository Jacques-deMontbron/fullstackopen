const DisplayTenCountries = ({ countries }) => {
    return (
        <>
            <p>{countries.length} countries found:</p>
            <ul>
                {countries.map(country => {
                    return (
                        <li key={country.cca3}>{country.name.common}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default DisplayTenCountries