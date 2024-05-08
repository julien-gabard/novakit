// Waiting for a component that will use a default theme and to see how to set a default theme without using a provider
import 'styled-components'

import { DefaultTheme } from 'styled-components'

interface IPalette {
    main: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            alert: {
                success: string
                danger: string
                warning: string
                info: string
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}

const defaultTheme: DefaultTheme = {
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
    },
}

export default defaultTheme
