const Part = (props) => {
    return (
        <>
            <p>
                {props.partNb} {props.exercisesNb}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part partNb={props.part1} exercisesNb={props.exercises1} />
            <Part partNb={props.part2} exercisesNb={props.exercises2} />
            <Part partNb={props.part3} exercisesNb={props.exercises3} />
        </div>
    )
}

export default Content