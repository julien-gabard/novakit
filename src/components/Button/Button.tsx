import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react'

import { colorType, size, variant } from '../../utils'
import { StyledButton } from './styles'

export interface ButtonProps {
    color: colorType
    children: ReactNode
    hasBorderRadius: boolean
    isDisabled: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    size: size
    variant: variant
}

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
