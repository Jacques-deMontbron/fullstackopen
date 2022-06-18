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

    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName("")
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