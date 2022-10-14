import React from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { CircularProgress } from '@mui/material'
import RoomList from './room-list/room-list'
import HotelInfo from './hotel-info/hotel-info'
import Alert from '@mui/material/Alert'
import { useTheme } from '@mui/material/styles'
import { getAssociatedRooms } from '../../utils/services/room-rates-utils'
import { getFilteredHotels, getFilteredRooms } from '../../utils/utils'
import { Filters, Hotel, Room } from '../../common/types'
import map from 'lodash/map'
import size from 'lodash/size'
import {
    hotelListSection,
    hotelCardContainer
} from './styles'

interface HotelListProps {
    hotels: Hotel[],
    rooms: Room[],
    filters: Filters,
    loading: boolean,
    error: null | string
}

const HotelList: React.FC<HotelListProps> = ({ hotels, rooms, filters, loading, error }: HotelListProps) => {
    const theme = useTheme()
    const isMobile = useMediaQuery<string>(theme.breakpoints.down('sm'))

    if (loading) {
        return (
            <Box component="section" sx={hotelListSection}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Box component="section" sx={{...hotelListSection, justifyContent: 'flex-start', pt: '0.5rem'}}>
                <Alert severity="error">{error}</Alert>
            </Box>
        )
    }

    const filteredHotels: Hotel[] = getFilteredHotels(hotels, filters)

    return (
        <Box component="section" sx={hotelListSection}>
            {map(filteredHotels, hotel => {
                const associatedRooms = getAssociatedRooms(rooms, hotel)
                const filteredRooms = getFilteredRooms(associatedRooms, filters)
                const doesRoomsAvailable = !!size(filteredRooms)

                return (
                    <Box key={hotel.id} sx={hotelCardContainer}>
                        <HotelInfo
                            hotel={hotel}
                            isMobile={isMobile}
                            doesRoomsAvailable={doesRoomsAvailable}
                        />
                        <RoomList
                            rooms={filteredRooms}
                            isMobile={isMobile}
                            doesRoomsAvailable={doesRoomsAvailable}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default HotelList