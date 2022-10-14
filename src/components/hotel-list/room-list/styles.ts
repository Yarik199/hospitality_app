import { toRem } from '../../../utils/utils'

export const dummyRoomInfoContainer = {
    display: 'flex',
    borderTop: '1px solid black',
    alignItems: 'center',
    flexGrow: 1,
    p: toRem(10)
}

export const roomInfoContainer = (isMobile: boolean) => {
    const base = {
        display: 'flex',
        borderBottom: '1px solid black',
        p: toRem(10),
        '&:last-child': {
            borderBottom: 'none'
        }
    }
    if (isMobile) {
        return {
            ...base,
            flexDirection: 'column',
            rowGap: toRem(20)
        }
    }

    return {
        ...base,
        columnGap: toRem(20)
    }
}

export const roomOccupancyContainer = (isMobile: boolean) => {
    if (isMobile) {
        return {
            flex: '0 1 auto'
        }
    }

    return {
        flex: '0 0 200px'
    }
}

export const roomDescriptionContainer = (isMobile: boolean) => {
    if (isMobile) {
        return {
            flex: '0 1 auto'
        }
    }

    return {
        flex: '1 1'
    }
}

export const h4Styles = { mb: '0.3rem', mt: 0 }

export const pStyles = { m: 0 }