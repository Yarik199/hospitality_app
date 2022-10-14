import React from 'react'
import Box from '@mui/material/Box'
import map from 'lodash/map'
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import {
    roomInfoContainer,
    dummyRoomInfoContainer,
    roomOccupancyContainer,
    roomDescriptionContainer,
    h4Styles,
    pStyles
} from './styles'
import { Room } from '../../../common/types'

interface RoomListProps {
    rooms: Room[],
    isMobile: boolean,
    doesRoomsAvailable: boolean
}

const RoomList: React.FC<RoomListProps> = ({ rooms, isMobile, doesRoomsAvailable }) => {
    if (!doesRoomsAvailable) {
        return (
            <Box sx={dummyRoomInfoContainer}>
                No rooms available
            </Box>
        )
    }

    return (
        <>
            {map(rooms, (room: Room) => {
                return (
                    <Box key={room.id} sx={roomInfoContainer(isMobile)}>
                        <Box sx={roomOccupancyContainer(isMobile)}>
                            {room.name && <Box component="h4" sx={h4Styles}>{room.name}</Box>}
                            {isNumber(get(room, 'occupancy.maxAdults')) && <Box component="p" sx={pStyles}>Adults: {get(room, 'occupancy.maxAdults')}</Box>}
                            {isNumber(get(room, 'occupancy.maxChildren')) && <Box component="p" sx={pStyles}>Children: {get(room, 'occupancy.maxChildren')}</Box>}
                        </Box>
                        <Box sx={roomDescriptionContainer(isMobile)}>
                            {room.longDescription && <Box component="p" sx={pStyles}>{room.longDescription}</Box>}
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default RoomList