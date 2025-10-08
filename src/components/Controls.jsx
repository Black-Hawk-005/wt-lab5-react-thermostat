import ControlButton from "./ControlButton";

function Controls({ onTempChange, onUnitChange, unit }) {
    const buttonText = (unit === 'C') ? 'Fahrenheit' : 'Celsius';
    return (
        <>
            <ControlButton 
                handleClick={() => onTempChange(-1, unit)} 
                buttonContent='-'
                className='temp-change-btn'>
            </ControlButton>
            <ControlButton
                handleClick={() => onTempChange(1, unit)} 
                buttonContent='+'
                className='temp-change-btn'>
            </ControlButton>
            <br></br>
            <ControlButton
                className="unit-toggle-btn"
                handleClick={onUnitChange}
                buttonContent={buttonText}>
            </ControlButton>
        </>
    )
}

export default Controls;