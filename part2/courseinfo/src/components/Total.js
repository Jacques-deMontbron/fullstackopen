const Total = ({ parts }) => {

    return (
        <p>Number of exercises {
            parts.reduce((acc, currentValue) => acc + currentValue.exercises, 0)
        }</p>
    )
}

export default Total