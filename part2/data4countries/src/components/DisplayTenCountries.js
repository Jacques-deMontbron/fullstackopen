const DisplayTenCountries = ({ countries, onClickShow }) => {
    return (
        <>
            <p>{countries.length} countries found:</p>
            <ul>
                {countries.map(country => {
                    return (
                        <li key={country.cca3}>{country.name.common}
                            <button key={`button-${country.cca3}`} onClick={onClickShow(country.name.common)}>show</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DisplayTenCountries