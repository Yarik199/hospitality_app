import React from 'react'
import Header from './header/header'
import FilterBar from './filter-bar/filter-bar'
import Footer from './footer/footer'
import HotelList from './hotel-list/hotel-list'
import { Box } from '@mui/material'
import useHotelsAndRooms from '../utils/hooks/useHotelsAndRooms'
import useFilters from '../utils/hooks/useFilters'
import { mainContainer } from './styles'

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
