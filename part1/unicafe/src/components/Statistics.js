import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {

    const nbAllFeedbacks = good + neutral + bad
    const average = nbAllFeedbacks === 0 ? 0 : ((good - bad) / nbAllFeedbacks)
    const positiveRatio = nbAllFeedbacks === 0 ? 0 : (good / nbAllFeedbacks)
    if (nbAllFeedbacks === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p> No feedback given</p >
            </>
        )
    }
    else {
        return (
            <>
                <h1>statistics</h1>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={nbAllFeedbacks} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positiveRatio * 100 + "%"} />
            </>
        )
    }
}

export default Statistics