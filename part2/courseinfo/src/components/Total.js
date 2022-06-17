const Total = ({ parts }) => {
    const exercicesNb = parts.reduce((acc, currentValue) => acc + currentValue.exercises, 0)
    return (
        <b>
            Total of {
                exercicesNb
            } exercise{exercicesNb <= 1 ? "" : "s"}
        </b>
    )
}

export default Total