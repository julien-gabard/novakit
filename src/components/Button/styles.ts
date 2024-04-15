import styled, { css } from 'styled-components'

import { colorType, defaultTheme, size, variant } from '../../utils'

export interface StyledButtonProps {
    $color: colorType
    $hasBorderRadius: boolean
    $size: size
    $variant: variant
}

export const StyledButton = styled.button<StyledButtonProps>`
    border-radius: ${({ $hasBorderRadius }) => ($hasBorderRadius ? '4px' : 0)};
    cursor: pointer;
    display: inline-flex;
    line-height: 1.75;
    outline: none;
    position: relative;
    text-transform: uppercase;

    -webkit-tap-highlight-color: transparent;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        cursor: default;
    }

    ${({ $color, theme, $variant }) => {
        const ApplyStyleVariants = (baseColor: string) => {
            switch ($variant) {
                case 'outlined':
                    return css`
                        background: none;
                        border: 1px solid ${baseColor};
                        color: ${baseColor};

                        &:disabled {
                            border: 1px solid ${theme.colors.disabled.main};
                            color: ${theme.colors.disabled.text};
                        }
                    `
                case 'contained':
                    return css`
                        background: ${baseColor};
                        border: none;

                        &:disabled {
                            background: ${theme.colors.disabled.main};
                            color: ${theme.colors.disabled.text};
                        }
                    `
                case 'text':
                    return css`
                        background: none;
                        border: none;
                        color: ${baseColor};

                        &:hover {
                            background: rgba(255, 255, 252, 0.08);
                        }

                        &:disabled {
                            color: ${theme.colors.disabled.text};
                        }
                    `
                default:
                    return ''
            }
        }

        switch ($color) {
            case 'primary':
                return css`
                    ${ApplyStyleVariants(theme.colors.primary)}
                `
            case 'secondary':
                return css`
                    ${ApplyStyleVariants(theme.colors.secondary)}
                `
            case 'success':
                return css`
                    color: #ffffff;
                    ${ApplyStyleVariants(theme.colors.alert.success)}
                `
            case 'danger':
                return css`
                    color: #ffffff;
                    ${ApplyStyleVariants(theme.colors.alert.danger)}
                `
            case 'info':
                return css`
                    color: #ffffff;
                    ${ApplyStyleVariants(theme.colors.alert.info)}
                `
            case 'warning':
                return css`
                    ${ApplyStyleVariants(theme.colors.alert.warning)}
                `
            default:
                return ''
        }
    }} {
    }

    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return css`
                    padding: 4px 10px;
                `
            case 'medium':
                return css`
                    padding: 6px 16px;
                `
            case 'large':
                return css`
                    padding: 8px 22px;
                `
            default:
                return ''
        }
    }}
`

StyledButton.defaultProps = {
    theme: defaultTheme,
}
