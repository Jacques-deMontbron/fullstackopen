const Statistics = ({ good, neutral, bad }) => {

    const nbAllFeedbacks = good + neutral + bad
    const average = nbAllFeedbacks == 0 ? 0 : ((good - bad) / nbAllFeedbacks)
    const positiveRatio = nbAllFeedbacks == 0 ? 0 : (good / nbAllFeedbacks)

    return (
        <>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {nbAllFeedbacks}</p>
            <p>average {average}</p>
            <p>positive {positiveRatio * 100}%</p>
        </>
    )
}

export default Statistics