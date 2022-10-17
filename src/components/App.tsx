import React, { useEffect, useState } from 'react'
import { getFormattedHotels } from '../utils/services/hotels-utils'
import { getFormattedRooms } from '../utils/services/room-rates-utils'
import { COLLECTION_ID } from '../common/constants'
import Header from './header/header'
import FilterBar from './filter-bar/filter-bar'
import Footer from './footer/footer'
import HotelList from './hotel-list/hotel-list'
import { Filters, Hotel, Room } from '../common/types'
import { Box } from '@mui/material'
import { mainContainer } from './styles'

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

const useFilters = () => {
    const [filters, setFilters] = useState<Filters>({
        rating: 0,
        adults: 1,
        children: 0
    })

    const onFiltersUpdate = (field: string, value: number): void => {
        setFilters((prevState: Filters) => ({ ...prevState, [field]: value }))
    }

    return {
        filters,
        onFiltersUpdate
    }
}

function App() {
    const { hotels, rooms, error, loading } = useHotelsAndRooms()
    const { filters, onFiltersUpdate } = useFilters()

    return (
        <>
            <Header />
            <Box component="main" sx={mainContainer}>
                {!loading && !error && <FilterBar onFiltersUpdate={onFiltersUpdate} filters={filters} />}
                <HotelList hotels={hotels} rooms={rooms} filters={filters} loading={loading} error={error} />
            </Box>
            {!loading && !error && <Footer />}
        </>
    );
}

export default App
