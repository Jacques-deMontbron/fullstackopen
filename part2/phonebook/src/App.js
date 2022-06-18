import { useState } from 'react'
import NumbersList from './Components/NumbersList'
import PhonebookForm from './Components/PhonebookForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    // Check with case sensitivity
    if (persons.find((elt) => elt.name.toLowerCase() === newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = { name: newName }
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
  }

  const nameInputChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <PhonebookForm onSubmit={addName} onChange={nameInputChange} inputValue={newName} />
      <NumbersList persons={persons} />
    </div>
  )
}

export default App