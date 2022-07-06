import "../styles/Notification.css"

const Notification = ({ notification, error }) => {
    if (notification === null && error === null)
        return

    const Info = notification ? () => (
        <div className='notification'>
            {notification}
        </div>
    ) : () => <></>
    const Error = error ? () => (
        <div className='error'>
            {error}
        </div>
    ) : () => <></>;

    return (
        <>
            <Info />
            <Error />
        </>
    )
}

export default Notification