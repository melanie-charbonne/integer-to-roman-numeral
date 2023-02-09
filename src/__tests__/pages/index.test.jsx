import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import IntegerToRomanNumeralConverter from '@/pages/index'
import IntegerInput from '@/components/IntegerInput'

describe('Index page', () => {
    it('should render', () => {
        const { getByRole } = render(<IntegerToRomanNumeralConverter />)
        expect(getByRole('main')).toBeInTheDocument()
    })
    it('should render IntegerInput component', () => {
        const { getByTestId } = render(<IntegerToRomanNumeralConverter />)
        expect(getByTestId('integer-input')).toBeInTheDocument()
    })

    it('should not render RomanNumeralOutput component at initial load', () => {
        const romanNumeralOutput = screen.queryByTestId('output-roman')
        expect(romanNumeralOutput).toBeNull()
    })

    it('should call handleChange and update value when user type a number', async () => {
        const user = userEvent.setup()
        const intValue = '56'
        const onChangeHandler = jest.fn()
       
        const { getByTestId } = render(<IntegerInput onChangeHandler={onChangeHandler} />)
        const inputInteger = await getByTestId('integer-input')
       
        await user.type(inputInteger, intValue)
        expect(onChangeHandler).toHaveBeenCalled()
        expect(inputInteger.value).toBe(intValue)
    })
   
    it('should render RomanNumeralOutput when user type a valid number', async () => {
        const user = userEvent.setup()
        const intValue = '3'
        
        const { getByTestId } = render(<IntegerToRomanNumeralConverter />)
        const inputInteger = await getByTestId('integer-input')
       
        await user.type(inputInteger, intValue)

        const romanNumeralOutput = await getByTestId('output-roman')
        expect(romanNumeralOutput).toBeInTheDocument()
    })
   
    it('should not render RomanNumeralOutput when user type an invalid number', async () => {
        const user = userEvent.setup()
        const intValue = '0'
        
        const { getByTestId } = render(<IntegerToRomanNumeralConverter />)
        const inputInteger = await getByTestId('integer-input')
        
        await user.type(inputInteger, intValue)

        const romanNumeralOutput = await screen.queryByTestId('output-roman')
        expect(romanNumeralOutput).toBeNull()
    })

    it('should render ErrorMessage when user type an invalid number', async () => {
        const user = userEvent.setup()
        const intValue = "1001"

        const { getByTestId } = render(<IntegerToRomanNumeralConverter />)
        const inputInteger = await getByTestId('integer-input')
        
        await user.type(inputInteger, intValue)

        const ErrorMessage = await getByTestId('error-message')
        expect(ErrorMessage).toBeInTheDocument()
    })
})
