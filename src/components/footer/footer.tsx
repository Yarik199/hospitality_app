import React from 'react'
import Box from '@mui/material/Box'
import { footer } from './styles'

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={footer}>
            Copyright © Yaroslav Krupa
        </Box>
    )
}

export default Footer