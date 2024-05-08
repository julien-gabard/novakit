import styled, { css } from 'styled-components'

interface IPathStyledProps {
    $lineNumber: number
    $isActive: boolean
    $isRounded?: boolean
}

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    padding: 0;
    width: fit-content;
`

export const Path = styled.path<IPathStyledProps>`
    fill: none;
    stroke-linecap: ${({ $isRounded }) => ($isRounded ? 'round' : 'square')};
    transition-duration: 600ms;
    transition-property: stroke-dasharray, stroke-dashoffset;
    transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);

    ${({ $lineNumber, $isActive }) => {
        switch ($lineNumber) {
            case 1:
            case 3:
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
        }
    }}
`
