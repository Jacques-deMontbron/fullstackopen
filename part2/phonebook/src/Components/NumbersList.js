import "../styles/NumbersList.css"

const NumbersList = ({ persons, searchFilter, deleteEntry }) => {
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
                                <li key={person.name}>
                                    {person.name} {person.number}
                                    <button onClick={`deleteEntry(${person.id})`}>Delete</button>
                                </li>
                            )
                        }
                        else
                            return
                    }
                    else {
                        return (
                            <li key={person.id}>
                                {person.name} {person.number}
                                <button onClick={deleteEntry(person.id)}>Delete</button>
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default NumbersList