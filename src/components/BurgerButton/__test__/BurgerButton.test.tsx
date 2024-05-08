import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import BurgerButton from '../BurgerButton'

describe('BurgerButton component', () => {
    /**
     * Event onClick Burger button for change isActive
     */
    it('renders correctly', () => {
        render(<BurgerButton isActive />)

        const burgerButton = screen.getByTestId('burger-button')

        expect(burgerButton).toBeInTheDocument()
    })
})
