import Button from "./Button"

const Feedback = ({ good, neutral, bad }) => {
    return (
        <>
            <h1>give feedback</h1>
            <Button onClick={good.onClick} text={good.text} />
            <Button onClick={neutral.onClick} text={neutral.text} />
            <Button onClick={bad.onClick} text={bad.text} />
        </>
    )
}

export default Feedback