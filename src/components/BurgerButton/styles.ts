import styled, { css } from 'styled-components'

import { defaultTheme } from '../../utils'

export interface IPathStyledProps {
    $lineNumber: number
    $isActive: boolean
}

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    outline: none;
    padding: 0;
    width: fit-content;
`

export const PathStyled = styled.path<IPathStyledProps>`
    fill: none;
    transition-duration: ${({ theme }) => theme.duration.medium};
    transition-property: stroke-dasharray, stroke-dashoffset;
    transition-timing-function: ${({ theme }) =>
        theme.timingFunction.cubicBezier};

    ${({ $lineNumber, $isActive }) => {
        switch ($lineNumber) {
            case 1:
                return $isActive
                    ? css`
                          stroke-dasharray: 90 207;
                          stroke-dashoffset: -134;
                      `
                    : css`
                          stroke-dasharray: 60 207;
                      `
            case 2:
                return $isActive
                    ? css`
                          stroke-dasharray: 1 60;
                          stroke-dashoffset: -30;
                      `
                    : css`
                          stroke-dasharray: 60 60;
                      `
            case 3:
                return $isActive
                    ? css`
                          stroke-dasharray: 90 207;
                          stroke-dashoffset: -134;
                      `
                    : css`
                          stroke-dasharray: 60 207;
                      `
        }
    }}
`

PathStyled.defaultProps = {
    theme: defaultTheme,
}
