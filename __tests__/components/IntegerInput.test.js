import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import IntegerInput from '@/components/IntegerInput'

describe('IntegerInput component', () => {
    it('should render the component onto the screen', () => {
        const MockHandleChange = jest.fn()
        const { getByTestId } = render(
            <IntegerInput handleChange={MockHandleChange} />
        )
        expect(getByTestId('integer-input')).toBeInTheDocument()
    })

    it('should call handleChange function on change', () => {
        const MockHandleChange = jest.fn()
        const { container } = render(
            <IntegerInput handleChange={MockHandleChange} />
        )
        const input = getByTestId(container, 'integer-input')
        fireEvent.change(input, { target: { value: 5 } })
        expect(MockHandleChange).toBeCalled()
    })
    // it('should set value to 1 when input value is lower than 1', () => {
    //     const MockHandleChange = jest.fn()
    //     const inputValue = 0
    //     const { container } = render(
    //         <IntegerInput handleChange={MockHandleChange} />
    //     )
    //     const input = getByTestId(container, 'integer-input')
    //     fireEvent.change(input, { target: { value: Number(inputValue) } })
    //     //expect(MockHandleChange).toBeCalledWith(0)
    //     expect(input.value).toBe(0)
    // })
})
