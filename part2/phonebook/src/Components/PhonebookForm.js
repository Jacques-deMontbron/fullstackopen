const PhonebookForm = ({ onChange, onSubmit, inputValue }) => {
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
                <div>debug: {inputValue}</div>
            </form>
        </>
    )
}

export default PhonebookForm