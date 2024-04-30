import styled, { css } from 'styled-components'

import { defaultTheme } from '../../utils'

export interface IPathStyledProps {
    $lineNumber?: number
    $isActive?: boolean
    $isRounded?: boolean
}

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    padding: 0;
    width: fit-content;
`

export const PathStyled = styled.path<IPathStyledProps>`
    fill: none;
    stroke-linecap: ${({ $isRounded }) => ($isRounded ? 'round' : 'square')};
    transition-duration: ${({ theme }) => theme.duration.medium};
    transition-property: stroke-dasharray, stroke-dashoffset;
    transition-timing-function: ${({ theme, $lineNumber }) =>
        $lineNumber === 0 || $lineNumber === 2
            ? theme.timingFunction.cubicBezier
            : theme.timingFunction.default};

    ${({ $lineNumber, $isActive }) => {
        switch ($lineNumber) {
            case 0:
                return $isActive
                    ? css`
                          stroke-dasharray: 90 207;
                          stroke-dashoffset: -134;
                      `
                    : css`
                          stroke-dasharray: 60 207;
                      `
            case 1:
                return $isActive
                    ? css`
                          stroke-dasharray: 1 60;
                          stroke-dashoffset: -30;
                      `
                    : css`
                          stroke-dasharray: 60 60;
                      `
            case 2:
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
