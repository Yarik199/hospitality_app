import { toRem } from '../../../utils/utils'

export const hotelInfoContainer = (doesRoomsAvailable: boolean, isMobile: boolean) => {
    const base = {
        display: 'flex',
        ...(doesRoomsAvailable && { borderBottom: '1px solid black' }),
        p: toRem(10)
    }

    if (isMobile) {
        return {
            ...base,
            flexDirection: 'column',
            rowGap: toRem(10),
        }
    }

    return {
        ...base,
        columnGap: toRem(20),
    }
}

export const hotelImageContainer = {
    flex: '0 0 200px'
}

export const hotelDescriptionContainer = (isMobile: boolean) => {
    const base = {
        flex: '1 1',
        display: 'flex',
    }

    if (isMobile) {
        return {
            ...base,
            flexDirection: 'column'
        }
    }

    return {
        ...base,
        justifyContent: 'space-between'
    }
}

export const imageResponsiveStyles = (isMobile: boolean) => {
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

export const h1Styles = { m: 0 }
export const pStyles = { mt: '0.3rem', mb: '0.3rem' }
