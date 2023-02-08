import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'

describe('Index page', () => {
    it('should render', () => {
        const { getByRole } = render(<Home />)
        expect(getByRole('main')).toBeInTheDocument()
    })
})
