
function ControlButton({ handleClick, buttonContent, className }) {
    return(
        <>
            <button 
                className={className}
                onClick={() => handleClick()}>
                {buttonContent}
            </button>
        </>
    )
}

export default ControlButton;