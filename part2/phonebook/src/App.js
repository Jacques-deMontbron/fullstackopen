import axios from 'axios'
import { useEffect, useState } from 'react'
import Notification from './components/Notification'
import NumbersList from './components/NumbersList'
import PhonebookForm from './components/PhonebookForm'
import SearchInput from './components/SearchInput'
import personsService from './services/persons'

let currentErrorTimeOutID = null; // To prevent that an error timeout overlap a new one
let currentInfoTimeOutID = null; // To prevent that a notification timeout overlap a new one
const App = () => {

  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)


  // Recover the db first and set the persons
  const dbName = "persons"
  useEffect(() => {
    personsService
      .getAll()
      .then(data => {
        console.log(`${dbName} db recovered`)
        setPersons(data)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()

    // Check with case sensitivity
    const registeredPerson = persons.find((elt) => elt.name.toLowerCase() === newName.toLocaleLowerCase())
    if (registeredPerson) {
      if (!window.confirm(`${registeredPerson.name} is already added to the Phonebook. Replace the old number with a new one ?`))
        return
    }
    // Test if we have a number in the number input
    // if (/^(\d+(\-|\s+)?)+$/.test(newNumber) === false) {
    //   alert(`${ newNumber } doesn't seem to be a number`)
    //   return
    // }

    const newPerson = { name: newName, number: newNumber }

    if (!registeredPerson) {
      personsService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
          setNotification(
            `Added ${newPerson.name} with number ${newPerson.number}`
          )
          setNewName("")
          setNewNumber("")

          if (currentInfoTimeOutID)
            clearTimeout(currentInfoTimeOutID)
          currentInfoTimeOutID = setTimeout(() => {
            setNotification(null)
            currentInfoTimeOutID = null;
          }, 5000)
        })
    }
    else {
      personsService
        .update(registeredPerson.id, newPerson)
        .then(data => {
          setPersons(persons.map(person => person.id === data.id ? data : person))
          setNotification(
            `Updated ${newPerson.name} with number ${newPerson.number}`
          )
          setNewName("")
          setNewNumber("")

          if (currentInfoTimeOutID)
            clearTimeout(currentInfoTimeOutID)
          currentInfoTimeOutID =
            setTimeout(() => {
              setNotification(null)
              currentInfoTimeOutID = null
            }, 5000)

        })

    }
  }

  const deleteEntry = (id) => {
    return () => {
      const concernedPerson = persons.find(person => person.id === id)
      if (!window.confirm(`Delete ${concernedPerson.name} ?`))
        return

      personsService
        .delete(id)
        .then(response => {
          console.log(`Entry of id #${id} deleted`)
          setPersons(persons.filter(person => person.id !== id))
          setNotification(
            `Deleted ${concernedPerson.name} with number ${concernedPerson.number}`
          )

          if (currentInfoTimeOutID)
            clearTimeout(currentInfoTimeOutID)
          currentInfoTimeOutID = setTimeout(() => {
            setNotification(null)
            currentInfoTimeOutID = null
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          setPersons(persons.filter(person => person.id !== id))
          setError(`Information of ${concernedPerson.name} has already been removed from the server`)
          if (currentErrorTimeOutID)
            clearTimeout(currentErrorTimeOutID)
          currentErrorTimeOutID = setTimeout(() => {
            setError(null)
            currentErrorTimeOutID = null
          }, 5000)
        })
    }
  }

  const nameInputChange = (event) => setNewName(event.target.value)
  const numberInputChange = (event) => setNewNumber(event.target.value)
  const searchInputChange = (event) => setSearchValue(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification} error={error} />
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
      <NumbersList persons={persons} searchFilter={searchValue} deleteEntry={deleteEntry} />
    </div>
  )
}

export default App