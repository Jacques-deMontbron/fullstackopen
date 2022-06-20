const DisplayTenCountries = ({ countries, onClickShow }) => {
    return (
        <>
            <p>{countries.length} countries found:</p>
            <ul>
                {countries.map(country => {
                    return (
                        <>
                            <li key={country.cca3}>{country.name.common}
                                <button onClick={onClickShow(country.name.common)} countryName="country.name.common">show</button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default DisplayTenCountries