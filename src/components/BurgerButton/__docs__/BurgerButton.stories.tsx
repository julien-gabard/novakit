import type { Meta, StoryObj } from '@storybook/react'

import BurgerButton from '../BurgerButton'

const meta = {
    title: 'Design System/Components/BurgerButton',
    component: BurgerButton,
    tags: ['autodocs'],
} satisfies Meta<typeof BurgerButton>

type Story = StoryObj<typeof BurgerButton>

export const ButtonStory = {
    name: 'Burger Button',
} satisfies Story

export default meta
