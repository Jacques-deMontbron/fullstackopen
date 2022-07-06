const DisplayCountryGenerics = ({ countryName, capitalName, area, languages, flag }) => {
    return (
        <>
            <h1>{countryName}</h1>
            <p>
                capital: {capitalName}<br />
                area: {area}
            </p>
            <h3>Languages</h3>
            <ul>
                {Object.entries(languages)
                    .map(([key, language]) => {
                        return (<li key={key}>{language}</li>)
                    })}
            </ul>
            <img src={flag} alt={`flag of ${countryName}`} />
        </>
    )
}

export default DisplayCountryGenerics