import type { Meta, StoryObj } from '@storybook/react'

import Example from './Example'

const meta: Meta<typeof Example> = {
    title: 'Button',
    component: Example,
}

type Story = StoryObj<typeof Example>

export const Button: Story = {
    args: {
        text: 'Button',
        onClick: () => console.log('Button'),
    },
}

export default meta
