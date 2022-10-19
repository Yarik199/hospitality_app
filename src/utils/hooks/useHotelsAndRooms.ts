import { useEffect, useState } from 'react'
import { Hotel, Room } from '../../common/types'
import { getFormattedHotels } from '../services/hotels-utils'
import { COLLECTION_ID } from '../../common/constants'
import { getFormattedRooms } from '../services/room-rates-utils'

const useHotelsAndRooms = () => {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [rooms, setRooms] = useState<Room[]>([])
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchHotelsAndRooms = async (): Promise<void> => {
        setLoading(true)
        try {
            const hotels: Hotel[] = await getFormattedHotels(COLLECTION_ID)
            const rooms: Room[] = await getFormattedRooms(hotels)
            setHotels(hotels)
            setRooms(rooms)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError('There are some issues with hotels or rooms availability. Please try again later.')
        }
    }

    useEffect( () => {
        fetchHotelsAndRooms()
    }, [])

    return {
        hotels,
        rooms,
        error,
        loading
    }
}

export default useHotelsAndRooms