import { AxiosResponse } from 'axios'
import { fetchRooms } from '../../services/room-rates/room-rates-service'
import { transformRooms } from '../../services/room-rates/room-rates-response-transformer'
import { getHotelIds } from './hotels-utils'
import { Hotel, Room } from '../../common/types'
import { RoomRatesApiRequest } from '../../services/room-rates/types'
import map from 'lodash/map'
import filter from 'lodash/filter'

export const getFormattedRooms = async (hotels: Hotel[]): Promise<Room[]> => {
    try {
        const hotelIds: string[] = getHotelIds(hotels)
        const roomPromises: Promise<AxiosResponse<RoomRatesApiRequest>>[] = map(hotelIds, (hotelId: string) => fetchRooms(hotelId))
        const response: PromiseSettledResult<Awaited<Promise<AxiosResponse<RoomRatesApiRequest>>>>[] = await Promise.allSettled(roomPromises)
        const transformedRooms: Room[] = transformRooms(response, hotelIds)

        return transformedRooms
    } catch (error) {
        throw error
    }
}

export const getAssociatedRooms = (rooms: Room[], hotel: Hotel) => {
    return filter(rooms, room => room.hotelId === hotel.id)
}