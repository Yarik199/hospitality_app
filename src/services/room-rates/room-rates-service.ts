import axios, { AxiosResponse } from 'axios'
import { RoomRatesApiRequest } from './types'

export const fetchRooms = async (hotelId: string): Promise<AxiosResponse<RoomRatesApiRequest>> => {
    try {
        return await axios.get<RoomRatesApiRequest>(`/roomRates/OBMNG/${hotelId}`)
    } catch (error) {
        throw error
    }
}