const IntegerInput = ({value, handleChange}) => {
    return (
        <>
            <h1>Enter an Integer:</h1>
            <form>
                <input
                    data-testid='integer-input'
                    type='number'
                    value={value}
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </>
    )
}

export default IntegerInput
