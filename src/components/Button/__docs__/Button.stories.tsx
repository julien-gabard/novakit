import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
}

type Story = StoryObj<typeof Button>

export const ButtonStory: Story = {
    name: 'Button',
    args: {
        children: 'Button',
        onClick: () => console.log('Button'),
    },
}

export default meta
