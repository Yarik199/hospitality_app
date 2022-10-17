import React from 'react'
import Box from '@mui/material/Box'
import Image from '../common/image'
import { HOTEL_HEADER_IMAGE_SRC } from '../../common/constants'
import { headerContainer } from './styles'

const Header: React.FC = () => {
    return (
        <Box component="header" sx={headerContainer}>
            <Image src={HOTEL_HEADER_IMAGE_SRC} isHeader />
        </Box>
    )
}

export default Header