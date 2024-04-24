import '@testing-library/jest-dom'

import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button component', () => {
    /**
     * Event onClick Button
     */
    it('calls onClick when clicked', () => {
        const onClickMock = vi.fn()
        const { getByText } = render(
            <Button onClick={onClickMock}>Click me</Button>,
        )
        const button = getByText('Click me')

        fireEvent.click(button)

        expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    /**
     * Default Button
     */
    it('renders correctly default', () => {
        render(<Button>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props variant
     */
    it('renders correctly variant outlined', () => {
        render(<Button variant='outlined'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly variant text', () => {
        render(<Button variant='text'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props color
     */
    it('renders correctly color secondary', () => {
        render(<Button color='secondary'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color success', () => {
        render(<Button color='success'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color info', () => {
        render(<Button color='info'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color danger', () => {
        render(<Button color='danger'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color warning', () => {
        render(<Button color='warning'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props size
     */
    it('renders correctly size small', () => {
        render(<Button size='small'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly size large', () => {
        render(<Button size='large'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props hasBorderRadius
     */
    it('renders correctly rounded', () => {
        render(<Button hasBorderRadius>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props isDisabled
     */
    it('renders correctly disabled', () => {
        render(<Button isDisabled>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})
