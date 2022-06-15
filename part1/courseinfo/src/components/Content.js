const Part = (props) => {
    return (
        <>
            <p>
                {props.partInfo.name} {props.partInfo.exercises}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part partInfo={props.parts[0]} />
            <Part partInfo={props.parts[1]} />
            <Part partInfo={props.parts[2]} />
        </div>
    )
}

export default Content