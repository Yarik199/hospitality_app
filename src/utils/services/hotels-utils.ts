import { fetchHotels } from '../../services/hotels/hotels-service'
import { transformHotels } from '../../services/hotels/hotels-response-transformer'
import { Hotel } from '../../common/types'
import { HotelsApiRequest } from '../../services/hotels/types'
import { AxiosResponse } from 'axios'
import map from 'lodash/map'

export const getFormattedHotels = async (id: string): Promise<Hotel[]> => {
    try {
        const response: AxiosResponse<HotelsApiRequest[]> = await fetchHotels(id)
        const transformedHotels: Hotel[] = transformHotels(response)

        return transformedHotels
    } catch (error) {
        throw error
    }
}

export const getHotelIds = (hotels: Hotel[]) => {
    return map(hotels, (hotel: Hotel) => hotel.id)
}