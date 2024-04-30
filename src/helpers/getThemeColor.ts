import { ColorType, defaultTheme } from '../utils'

/**
 * Returns the color associated with the theme
 */
const getThemeColor = (color?: ColorType): string => {
    switch (color) {
        case 'primary':
            return defaultTheme.palette.primary.main
        case 'secondary':
            return defaultTheme.palette.secondary.main
        case 'danger':
            return defaultTheme.palette.alert.danger
        case 'success':
            return defaultTheme.palette.alert.success
        case 'warning':
            return defaultTheme.palette.alert.warning
        case 'info':
            return defaultTheme.palette.alert.info
        default:
            return ''
    }
}

export default getThemeColor
