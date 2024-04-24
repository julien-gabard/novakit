import styled, { css } from 'styled-components'

import { ColorType, SizeType, VariantType, defaultTheme } from '../../utils'

export interface IStyledButtonProps {
    $color?: ColorType
    $hasBorderRadius?: boolean
    $size?: SizeType
    $variant?: VariantType
}

export const StyledButton = styled.button<IStyledButtonProps>`
    align-items: center;
    border-radius: ${({ $hasBorderRadius }) => ($hasBorderRadius ? '20px' : 0)};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    position: relative;
    transition: all 100ms ease-in-out;

    -webkit-tap-highlight-color: transparent;

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        cursor: default;
    }

    ${({ $color, theme, $variant }) => {
        const ApplyStyleVariants = (
            baseColor: string,
            textColor = '#000000',
        ) => {
            switch ($variant) {
                case 'outlined':
                    return css`
                        background: none;
                        border: 1px solid ${baseColor};
                        color: ${baseColor};

                        &:hover {
                            background: ${baseColor};
                            color: ${textColor};
                        }

                        &:disabled {
                            border: 1px solid ${theme.palette.disabled.main};
                            color: ${theme.palette.disabled.contrastText};
                        }
                    `
                case 'contained':
                    return css`
                        background: ${baseColor};
                        border: none;
                        color: ${textColor};

                        &:hover {
                            filter: brightness(90%);
                        }

                        &:disabled {
                            background: ${theme.palette.disabled.main};
                            color: ${theme.palette.disabled.contrastText};
                        }
                    `
                case 'text':
                    return css`
                        background: none;
                        border: none;
                        color: ${baseColor};

                        &:hover {
                            background: ${baseColor};
                            color: ${textColor};
                        }

                        &:disabled {
                            color: ${theme.palette.disabled.contrastText};
                        }
                    `
            }
        }

        switch ($color) {
            case 'primary':
                return css`
                    ${ApplyStyleVariants(theme.palette.primary.main)}
                `
            case 'secondary':
                return css`
                    ${ApplyStyleVariants(theme.palette.secondary.main)}
                `
            case 'success':
                return css`
                    ${ApplyStyleVariants(
                        theme.palette.alert.success,
                        '#ffffff',
                    )}
                `
            case 'danger':
                return css`
                    ${ApplyStyleVariants(theme.palette.alert.danger, '#ffffff')}
                `
            case 'info':
                return css`
                    ${ApplyStyleVariants(theme.palette.alert.info, '#ffffff')}
                `
            case 'warning':
                return css`
                    ${ApplyStyleVariants(theme.palette.alert.warning)}
                `
        }
    }} {
    }

    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return css`
                    padding: 0.25rem 0.6rem;
                `
            case 'medium':
                return css`
                    padding: 0.4rem 1rem;
                `
            case 'large':
                return css`
                    padding: 0.5rem 1.4rem;
                `
        }
    }}
`

StyledButton.defaultProps = {
    theme: defaultTheme,
}
