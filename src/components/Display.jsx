
function Display({temperature, unit}) {

    return (
        <p className="display-text">
            {temperature}°{unit}
        </p>
    )
}

export default Display;