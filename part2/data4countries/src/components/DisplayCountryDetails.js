const DisplayCountryDetails = ({ country }) => {
    if (false) {
        return <p> 1 country found: {country.name.common}</p>
    }

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>
                capital: {country.capital[0]}<br />
                area: {country.area}
            </p>
            <h3>Languages</h3>
            <ul>
                {Object.entries(country.languages)
                    .map(([key, language]) => <li key={key}>{language}</li>)}
            </ul>
            <div>
                <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            </div>
        </>
    )
}

export default DisplayCountryDetails