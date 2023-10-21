function ResetButton({ count, resetCount }) {

    const buttonStyle = { backgroundColor: 'lightgreen' }

    return (
        <div>
            {count > 0 && (<div>
                <button style={buttonStyle} onClick={resetCount}>Reset</button>
            </div>)}

        </div>
    );
}

export default ResetButton();