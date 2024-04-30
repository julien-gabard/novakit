import { FC, MouseEventHandler } from 'react'

import { ButtonStyled, PathStyled } from './styles'
import { ColorType } from '../../utils'
import getThemeColor from '../../helpers/getThemeColor.ts'

export interface IBurgerButtonProps {
    /**
     * Changes the color of the button strokes
     *
     * @default 'primary'
     */
    color?: ColorType
    /**
     * Activates button animation to indicate open or close state
     *
     * @default false
     */
    isActive?: boolean
    /**
     * Rounding stroke edges
     *
     * @default false
     */
    isRounded?: boolean
    /**
     * Listening to the smile click event
     */
    onClick?: MouseEventHandler<HTMLButtonElement>
    /**
     * Sets button size to width and length
     *
     * @default 50
     */
    size?: number
    /**
     * Increases line thickness
     *
     * @default 5
     */
    strokeWidth?: number
}

const coordinatesPath: string[] = [
    'M20 29H80.0002C80.0002 29 94.4988 28.8174 94.533 66.7113 94.5431 77.9807 93 82 85.2592 81.669 82 82 75.0002 74.9999 75.0002 74.9999L25 25.0001',
    'M20 50H80',
    'M20 71H80.0002C80.0002 71 94.4988 71.1826 94.533 33.2887 94.5431 22.0193 92 18 85.2592 18.331 81 18 75.0002 25.0001 75.0002 25.0001L25 74.9999',
]

/**
 * Animated burger button indicating open or close action
 */
const BurgerButton: FC<IBurgerButtonProps> = ({
    color,
    isActive,
    isRounded,
    onClick,
    size,
    strokeWidth,
}) => (
    <ButtonStyled
        aria-label='Button open the menu'
        type='button'
        onClick={onClick}
    >
        <svg
            width={size}
            height={size}
            stroke={getThemeColor(color)}
            viewBox='0 0 100 100'
        >
            {coordinatesPath.map((coordinate, index) => (
                <PathStyled
                    strokeWidth={strokeWidth}
                    $lineNumber={index}
                    $isActive={isActive}
                    $isRounded={isRounded}
                    d={coordinate}
                />
            ))}
        </svg>
    </ButtonStyled>
)

BurgerButton.defaultProps = {
    color: 'primary',
    isActive: false,
    isRounded: false,
    size: 50,
    strokeWidth: 5,
}

export default BurgerButton
