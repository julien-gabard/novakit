import { useCallback, useLayoutEffect, useState } from 'react'

export type TUseMediaQuery = (
    device:
        | 'mobileS'
        | 'mobileM'
        | 'mobileL'
        | 'tablet'
        | 'laptop'
        | 'laptopL'
        | 'desktop',
) => boolean

const breakpoints = {
    mobileS: '(max-width: 320px)',
    mobileM: '(max-width: 375px)',
    mobileL: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)',
}

const getMatches = (mediaQuery: string): boolean => {
    if (
        typeof window === 'undefined' ||
        typeof window.matchMedia === 'undefined'
    ) {
        return false
    }

    return window.matchMedia(mediaQuery).matches
}

/**
 * Is a hook for responding to CSS media queries in JavaScript.
 * It evaluates a device string and returns a boolean indicating whether the query matches.
 */
const useMediaQuery: TUseMediaQuery = device => {
    const [matches, setMatches] = useState<boolean>(
        getMatches(breakpoints[device]),
    )

    const handleChange = useCallback((event: MediaQueryListEvent) => {
        setMatches(event.matches)
    }, [])

    useLayoutEffect(() => {
        if (
            typeof window === 'undefined' ||
            typeof window.matchMedia === 'undefined'
        ) {
            return
        }

        const mediaQueryList = window.matchMedia(breakpoints[device])

        mediaQueryList.addEventListener('change', handleChange)

        return () => {
            mediaQueryList.removeEventListener('change', handleChange)
        }
    }, [device, handleChange])

    return matches
}

export default useMediaQuery
