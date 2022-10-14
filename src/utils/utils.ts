import filter from 'lodash/filter'
import get from 'lodash/get'
import size from 'lodash/size'
import { Filters, Hotel, Image, Room } from '../common/types'

export const toRem = (pixels: number): string => `${pixels * 0.0625}rem`

export const getFilteredHotels = (hotels: Hotel[], filters: Filters): Hotel[] => {
    return filter(hotels, hotel => hotel.starRating >= filters.rating)
}

export const getFilteredRooms = (rooms: Room[], filters: Filters): Room[] => {
    return filter(rooms, room => (filters.adults <= get(room, 'occupancy.maxAdults', 0) && filters.children <= get(room, 'occupancy.maxChildren', 0)))
}

export const getCarouselSettings = (images: Image[], isMobile: boolean) => {
    const base = {
        indicators: false,
        ...(size(images) > 1 ? { navButtonsAlwaysVisible: true } : { navButtonsAlwaysInvisible: true }),
        navButtonsProps: {
            style: {
                backgroundColor: '#FAAF00',
                margin: '0 5px',
                padding: '5px',
                opacity: 0.5
            }
        }
    }

    if (isMobile) {
        return {
            ...base,
            height: 250
        }
    }

    return {
        ...base,
        height: 180
    }
}