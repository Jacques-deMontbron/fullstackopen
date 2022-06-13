import StatisticTableRow from "./StatisticTableRow"

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
                <table>
                    <tbody>
                        <StatisticTableRow text="good" value={good} />
                        <StatisticTableRow text="neutral" value={neutral} />
                        <StatisticTableRow text="bad" value={bad} />
                        <StatisticTableRow text="all" value={nbAllFeedbacks} />
                        <StatisticTableRow text="average" value={average} />
                        <StatisticTableRow text="positive" value={positiveRatio * 100 + "%"} />
                    </tbody>
                </table>
            </>
        )
    }
}

export default Statistics