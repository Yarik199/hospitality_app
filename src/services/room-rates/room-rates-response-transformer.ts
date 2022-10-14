import { AxiosResponse } from 'axios'
import map from 'lodash/map'
import get from 'lodash/get'
import flatMap from 'lodash/flatMap'
import filter from 'lodash/filter'
import { PROMISE_STATUS } from '../../common/constants'
import { Room } from '../../common/types'
import { RoomRatesApiRequest } from './types'

export const transformRooms = (response: PromiseSettledResult<Awaited<Promise<AxiosResponse<RoomRatesApiRequest>>>>[], hotelIds: string[]): Room[] => {
    const fulfilledResponses: PromiseSettledResult<Awaited<Promise<AxiosResponse<RoomRatesApiRequest>>>>[] = filter(response, item => item.status === PROMISE_STATUS.FULFILLED)

    return flatMap(fulfilledResponses, (item: PromiseSettledResult<Awaited<Promise<AxiosResponse<RoomRatesApiRequest>>>>, index: number) => {
        const rooms = map(get(item, 'value.data.rooms', []), room => {
            return {
                hotelId: hotelIds[index],
                id: get(room, 'id', ''),
                name: get(room, 'name', ''),
                longDescription: get(room, 'longDescription', ''),
                occupancy: get(room, 'occupancy', {}),
                images: get(room, 'images', [])
            }
        })

        return rooms
    })
}