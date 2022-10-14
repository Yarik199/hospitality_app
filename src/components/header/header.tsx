import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import { CircularProgress } from '@mui/material'
import { HOTEL_HEADER_IMAGE_SRC } from '../../common/constants'
import { loadingContainer, header } from './styles'

const Header: React.FC = () => {
    const [loaded, setLoaded] = useState<boolean>(false)

    const onImageLoad = (): void => {
        setLoaded(true)
    }

    return (
        <>
            {!loaded && <Box component="div" sx={loadingContainer}><CircularProgress/></Box>}
            <Grow in={loaded} {...(loaded && { timeout: 800 })}>
                <Box component="img" sx={loaded ? {...header, display: 'inline-block'} : header} src={HOTEL_HEADER_IMAGE_SRC} onLoad={onImageLoad} alt="Hotel header image" />
            </Grow>
        </>
    )
}

export default Header