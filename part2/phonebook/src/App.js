import { useState } from 'react'
import NumbersList from './Components/NumbersList'
import PhonebookForm from './Components/PhonebookForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addEntry = (event) => {
    event.preventDefault()

    // Check with case sensitivity
    if (persons.find((elt) => elt.name.toLowerCase() === newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    }
    // // Test if we have a number in the number input
    // else if (/^(\d+(\-|\s+)?)+$/.test(newNumber) === false) {
    //   alert(`${newNumber} doesn't seem to be a number`)
    // }
    else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
    }
  }

  const nameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const numberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <PhonebookForm
        onSubmit={addEntry}
        onChangeName={nameInputChange}
        nameInputValue={newName}
        onChangeNumber={numberInputChange}
        numberInputValue={newNumber}
      />
      <NumbersList persons={persons} />
    </div>
  )
}

export default App