const PopularAnecdote = ({ anecdote, voteNb }) => {
    return (
        <>
            <h1>Anecdote with most votes</h1>
            <div>
                {anecdote}
                <div>has {voteNb} vote{voteNb < 2 ? '' : 's'}</div>
            </div>
        </>
    )
}

export default PopularAnecdote