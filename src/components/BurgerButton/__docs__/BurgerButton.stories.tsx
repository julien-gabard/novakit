import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

import BurgerButton from '../BurgerButton'

const meta = {
    title: 'Design System/Components/Burger',
    component: BurgerButton,
    tags: ['autodocs'],
} satisfies Meta<typeof BurgerButton>

type Story = StoryObj<typeof BurgerButton>

export const ButtonStory = {
    name: 'Burger',
    render: args => {
        const [{ isActive }, updateArgs] = useArgs()

        const handleClick = () => {
            updateArgs({ isActive: !isActive })
        }

        return (
            <BurgerButton {...args} onClick={handleClick} isActive={isActive} />
        )
    },
} satisfies Story

export default meta
