import '@testing-library/jest-dom'

import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button component', () => {
    /**
     * Event onClick Button
     */
    it('calls onClick when clicked', async () => {
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
    it('renders correctly default', async () => {
        render(<Button>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props variant
     */
    it('renders correctly variant outlined', async () => {
        render(<Button variant='outlined'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly variant text', async () => {
        render(<Button variant='text'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props color
     */
    it('renders correctly color secondary', async () => {
        render(<Button color='secondary'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color success', async () => {
        render(<Button color='success'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color info', async () => {
        render(<Button color='info'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color danger', async () => {
        render(<Button color='danger'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly color warning', async () => {
        render(<Button color='warning'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props size
     */
    it('renders correctly size small', async () => {
        render(<Button size='small'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('renders correctly size large', async () => {
        render(<Button size='large'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props hasBorderRadius
     */
    it('renders correctly rounded', async () => {
        render(<Button hasBorderRadius>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props isDisabled
     */
    it('renders correctly disabled', async () => {
        render(<Button isDisabled>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})
