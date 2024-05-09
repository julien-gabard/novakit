import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import BurgerButton from '../BurgerButton'

describe('BurgerButton component', () => {
    it('renders correctly', () => {
        render(<BurgerButton />)

        const burgerButton = screen.getByTestId('burger-button')

        expect(burgerButton).toBeInTheDocument()
    })

    it('renders correctly is active', () => {
        render(<BurgerButton isActive />)

        const burgerButton = screen.getByTestId('burger-button')

        expect(burgerButton).toBeInTheDocument()
    })

    it('renders correctly is rounded lines', () => {
        render(<BurgerButton isRounded />)

        const burgerButton = screen.getByTestId('burger-button')

        expect(burgerButton).toBeInTheDocument()
    })
})
