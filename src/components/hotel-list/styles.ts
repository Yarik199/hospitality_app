import { toRem } from '../../utils/utils'

export const hotelListSection = {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: toRem(20),
    pb: toRem(20)
}

export const hotelCardContainer = {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    border: '1px solid black',
    borderRadius: toRem(5),
}