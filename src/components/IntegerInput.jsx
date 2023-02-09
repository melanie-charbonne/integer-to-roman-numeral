import { useCallback } from 'react'
const IntegerInput = ({ value, handleChange }) => {
    const intInput = useCallback((inputElement) => {
        if (inputElement) {
            inputElement.focus()
        }
    }, [])
    return (
        <>
            <form>
                <input
                    data-testid='integer-input'
                    type='number'
                    min='1'
                    max='1000'
                    value={value}
                    onChange={(e) => handleChange(e)}
                    ref={intInput}
                    placeholder='Enter a number between 1 and 1000'
                />
            </form>
        </>
    )
}

export default IntegerInput
