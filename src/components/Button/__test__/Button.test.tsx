import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button component', () => {
    /**
     * Default Button
     */
    it('Default', () => {
        render(<Button>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props variant
     */
    it('Variant outlined', () => {
        render(<Button variant='outlined'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Variant text', () => {
        render(<Button variant='text'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props color
     */
    it('Color secondary', () => {
        render(<Button color='secondary'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Color success', () => {
        render(<Button color='success'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Color info', () => {
        render(<Button color='info'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Color danger', () => {
        render(<Button color='danger'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Color warning', () => {
        render(<Button color='warning'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props size
     */
    it('Size small', () => {
        render(<Button size='small'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
    it('Size large', () => {
        render(<Button size='large'>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props hasBorderRadius
     */
    it('Rounded', () => {
        render(<Button hasBorderRadius>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    /**
     * Props isDisabled
     */
    it('Disabled', () => {
        render(<Button isDisabled>Button</Button>)
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})
