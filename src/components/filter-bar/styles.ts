import { toRem } from '../../utils/utils'

export const filterBarSection = (isMobile: boolean) => {
    const base = {
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: toRem(16),
        p: toRem(6),
        border: '1px solid black',
        borderRadius: toRem(5),
        backgroundColor: '#fff',
        position: 'relative',
    }

    if (isMobile) {
        return {
            ...base,
            flexDirection: 'column',
            height: '100px',
            top: toRem(-57)
        }
    }

    return {
        ...base,
        height: '30px',
        top: toRem(-22)
    }
}

export const ratingContainer = {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const adultsContainer = {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: toRem(3)
}

export const childrenContainer = {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: toRem(3)
}

export const iconButtonStyles = {
    p: toRem(1)
}

export const iconStyles = {
    fontSize: toRem(13)
}