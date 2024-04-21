import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../Button'

const meta = {
    title: 'Design System/Components/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const ButtonStory = {
    name: 'Button',
    args: {
        color: 'primary',
        children: 'Button',
        hasBorderRadius: false,
        isDisabled: false,
        onClick: action('on-click'),
        size: 'medium',
        variant: 'contained',
    },
} satisfies Story

export default meta
