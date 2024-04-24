import 'styled-components'

interface IPalette {
    main: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        delay: {
            default: string
        }
        duration: {
            default: string
            medium: string
        }
        palette: {
            primary: IPalette
            secondary: IPalette
            disabled: IPalette
            alert: {
                success: string
                danger: string
                warning: string
                info: string
            }
        }
        timingFunction: {
            default: string
            cubicBezier: string
            cubicBezier2: string
        }
    }
}

const defaultTheme = {
    palette: {
        alert: {
            success: '#21873D',
            danger: '#D13131',
            warning: '#C0CB4A',
            info: '#0076F5',
        },
        primary: {
            main: '#ee9b59',
            contrastText: '#000000',
        },
        secondary: {
            main: '#e8bcb9',
            contrastText: '#ffffff',
        },
        disabled: {
            main: 'rgba(255, 255, 255, 0.12)',
            contrastText: 'rgba(255, 255, 255, 0.3)',
        },
    },
    timingFunction: {
        default: 'ease-in-out',
        cubicBezier: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        cubicBezier2: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
        default: '300ms',
        medium: '600ms',
    },
    delay: {
        default: '300ms',
    },
}

export default defaultTheme
