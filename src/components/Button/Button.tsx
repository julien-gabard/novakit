import { FC, MouseEventHandler, ReactElement } from 'react'
import styled from 'styled-components'

export type ButtonProps = {
    text?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<ButtonProps>``

const Button: FC<ButtonProps> = ({ onClick, text }): ReactElement => (
    <StyledButton type='button' onClick={onClick}>
        {text}
    </StyledButton>
)

export default Button
