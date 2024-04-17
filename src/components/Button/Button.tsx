import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react'

import { ColorType, SizeType, VariantType } from '../../utils'
import { StyledButton } from './styles'

export interface ButtonProps {
    /**
     * Change button color
     * @default 'primary'
     */
    color: ColorType
    /**
     * Button contents
     */
    children: ReactNode
    /**
     * Activate rounded border
     * @default false
     */
    hasBorderRadius: boolean
    /**
     * Disables use of
     * @default false
     */
    isDisabled: boolean
    /**
     * Listening to the smile click event
     */
    onClick?: MouseEventHandler<HTMLButtonElement>
    /**
     * Set button size
     * @default 'medium'
     */
    size: SizeType
    /**
     * Choose between several button styles
     * @default 'contained'
     */
    variant: VariantType
}

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
const Button: FC<ButtonProps> = ({
    children,
    color,
    hasBorderRadius,
    isDisabled,
    onClick,
    size,
    variant,
}): ReactElement => (
    <StyledButton
        type='button'
        $color={color}
        disabled={isDisabled}
        $hasBorderRadius={hasBorderRadius}
        onClick={onClick}
        $size={size}
        $variant={variant}
    >
        {children}
    </StyledButton>
)

Button.defaultProps = {
    color: 'primary',
    hasBorderRadius: false,
    isDisabled: false,
    size: 'medium',
    variant: 'contained',
}

export default Button
