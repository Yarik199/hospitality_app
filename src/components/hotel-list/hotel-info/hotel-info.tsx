import React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating/Rating'
import Carousel from 'react-material-ui-carousel'
import map from 'lodash/map'
import { getCarouselSettings } from '../../../utils/utils'
import {
    hotelInfoContainer,
    hotelImageContainer,
    hotelDescriptionContainer,
    h1Styles,
    pStyles
} from './styles'
import { Hotel } from '../../../common/types'
import Image from '../../common/image'


interface HotelInfoProps {
    hotel: Hotel,
    doesRoomsAvailable: boolean,
    isMobile: boolean
}

const HotelInfo: React.FC<HotelInfoProps> = ({ hotel, doesRoomsAvailable, isMobile }) => {
    const { images, name, address1, address2, starRating } = hotel

    return (
        <Box sx={hotelInfoContainer(doesRoomsAvailable, isMobile)}>
            <Box sx={hotelImageContainer}>
                <Carousel {...getCarouselSettings(images, isMobile)}>
                    {map(images, (image, index) => {
                        return (
                            <Image key={index} src={image.url} isMobile={isMobile} />
                        )
                    })}
                </Carousel>
            </Box>
            <Box sx={hotelDescriptionContainer(isMobile)}>
                <Box>
                    {name && <Box component="h1" sx={h1Styles}>{name}</Box>}
                    {address1 && <Box component="p" sx={pStyles}>{address1}</Box>}
                    {address2 && <Box component="p" sx={pStyles}>{address2}</Box>}
                </Box>
                <Box>
                    <Rating value={starRating} readOnly />
                </Box>
            </Box>
        </Box>
    )
}

export default HotelInfo