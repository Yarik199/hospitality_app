import get from 'lodash/get'
import map from 'lodash/map'
import toNumber from 'lodash/toNumber'
import { AxiosResponse } from 'axios'
import { HotelsApiRequest } from './types'
import { Hotel } from '../../common/types'

export const transformHotels = (response: AxiosResponse<HotelsApiRequest[]>): Hotel[] => {
    const hotels: HotelsApiRequest[] = get(response, 'data', [])
    return map(hotels, (hotel: HotelsApiRequest) => {

        return {
            id: get(hotel, 'id', ''),
            name: get(hotel, 'name', ''),
            description: get(hotel, 'description', ''),
            address1: get(hotel, 'address1', ''),
            address2: get(hotel, 'address2', ''),
            starRating: toNumber(get(hotel, 'starRating', 0)),
            images: get(hotel, 'images', [])
        }
    })
}