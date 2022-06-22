import axios from 'axios'
import { useEffect, useState } from 'react'
import NumbersList from './Components/NumbersList'
import PhonebookForm from './Components/PhonebookForm'
import SearchInput from './Components/SearchInput'

const App = () => {

  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  // Recover the db first and set the persons
  const dbName = "persons"
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${dbName}`)
      .then(response => {
        console.log(`${dbName} db recovered`)
        setPersons(response.data)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()

    // Check with case sensitivity
    if (persons.find((elt) => elt.name.toLowerCase() === newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    // Test if we have a number in the number input
    // if (/^(\d+(\-|\s+)?)+$/.test(newNumber) === false) {
    //   alert(`${ newNumber } doesn't seem to be a number`)
    //   return
    // }

    const newPerson = { name: newName, number: newNumber }

    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })

  }

  const nameInputChange = (event) => setNewName(event.target.value)

  const numberInputChange = (event) => setNewNumber(event.target.value)

  const searchInputChange = (event) => setSearchValue(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchInput
        searchInputValue={searchValue}
        onChangeSearch={searchInputChange}
      />
      <PhonebookForm
        onSubmit={addEntry}
        onChangeName={nameInputChange}
        nameInputValue={newName}
        onChangeNumber={numberInputChange}
        numberInputValue={newNumber}
      />
      <NumbersList persons={persons} searchFilter={searchValue} />
    </div>
  )
}

export default App