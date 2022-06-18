const PhonebookForm = ({ onSubmit, onChangeName, nameInputValue, onChangeNumber, numberInputValue }) => {
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input
                        value={nameInputValue}
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    number: <input
                        value={numberInputValue}
                        onChange={onChangeNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PhonebookForm