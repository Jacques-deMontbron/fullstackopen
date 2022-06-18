const NumbersList = ({ persons, searchFilter }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => {
                    if (searchFilter) {
                        const lcSearchFilter = searchFilter.toLowerCase()
                        if (person.name.toLowerCase().includes(lcSearchFilter) ||
                            person.number.toLowerCase().includes(lcSearchFilter)) {
                            return (
                                <li key={person.name}>{person.name} {person.number}</li>
                            )
                        }
                    }
                    else {
                        return (
                            <li key={person.name}>{person.name} {person.number}</li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default NumbersList