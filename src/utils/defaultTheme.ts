import 'styled-components'

interface IPalette {
    main: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
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
}

export default defaultTheme
