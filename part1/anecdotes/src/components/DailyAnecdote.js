const DailyAnecdote = ({ anecdote, voteNb, onClickVote, onClickNext }) => {
    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>
                {anecdote}
            </div>
            <div>has {voteNb} vote{voteNb < 2 ? '' : 's'}</div>
            <button onClick={onClickVote}>vote</button>
            <button onClick={onClickNext}>next anecdote</button>
        </>
    )
}

export default DailyAnecdote