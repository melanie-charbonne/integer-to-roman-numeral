import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'
import IntegerInput from '@/components/IntegerInput'
import RomanNumeralOutput from '@/components/RomanNumeralOutput'

describe('Index page', () => {
    it('should render', () => {
        const { getByRole } = render(<Home />)
        expect(getByRole('main')).toBeInTheDocument()
    })
    it('should render IntegerInput component', () => {
       const { getByTestId } = render(
           <IntegerInput />
       )
       expect(getByTestId('integer-input')).toBeInTheDocument()
    })
    
    it('should render RomanNumeralOutput component', () => {
        const { getByTestId } = render(<RomanNumeralOutput />)
        expect(getByTestId('output-roman')).toBeInTheDocument()
    })
     
    
})
