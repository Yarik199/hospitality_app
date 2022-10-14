import axios, { AxiosResponse } from 'axios'
import { HotelsApiRequest } from './types'

export const fetchHotels = async (id: string): Promise<AxiosResponse<HotelsApiRequest[]>> => {
    try {
        return await axios.get<HotelsApiRequest[]>(`/hotels?collection-id=${id}`)
    } catch (error) {
        throw error
    }
}