import { toRem } from '../../utils/utils'

export const imageStyles = (isMobile: boolean) => {
    const base = {
        width: '100%',
        height: '100%'
    }

    if (isMobile) {
        return {
            ...base
        }
    }

    return {
        ...base,
        maxWidth: toRem(200),
        height: toRem(180)
    }
}

export const loadingContainer = {
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}