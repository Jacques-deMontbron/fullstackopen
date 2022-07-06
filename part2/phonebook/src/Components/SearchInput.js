const SearchInput = ({ searchInputValue, onChangeSearch }) => {
    return (
        <>
            Filter what is shown: <input
                value={searchInputValue}
                onChange={onChangeSearch}>
            </input >
        </>
    )
}

export default SearchInput