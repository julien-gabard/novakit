import { FC } from 'react'

import { ButtonStyled, PathStyled } from './styles'
import { ColorType } from '../../utils'
import getThemeColor from '../../helpers/getThemeColor.ts'

export interface IBurgerButtonProps {
    color: ColorType
    isActive: boolean
    size: number
    strokeWidth: number
}

const BurgerButton: FC<IBurgerButtonProps> = ({
    color,
    isActive,
    size,
    strokeWidth,
}) => (
    <ButtonStyled aria-label='Button open the menu' type='button'>
        <svg
            width={size}
            height={size}
            stroke={getThemeColor(color)}
            viewBox='0 0 100 100'
        >
            <PathStyled
                strokeWidth={strokeWidth}
                $lineNumber={1}
                $isActive={isActive}
                d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
            />
            <PathStyled
                strokeWidth={strokeWidth}
                $lineNumber={2}
                $isActive={isActive}
                d='M 20,50 H 80'
            />
            <PathStyled
                strokeWidth={strokeWidth}
                $lineNumber={3}
                $isActive={isActive}
                d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
            />
        </svg>
    </ButtonStyled>
)

BurgerButton.defaultProps = {
    color: 'primary',
    isActive: false,
    size: 50,
    strokeWidth: 5,
}

export default BurgerButton
