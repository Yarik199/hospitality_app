import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'
import Grow from '@mui/material/Grow'
import { loadingContainer, imageStyles } from './styles'
import { headerImageStyles } from '../header/styles'

interface ImageProps {
    src: string,
    isMobile?: boolean,
    isHeader?: boolean
}

const Image: React.FC<ImageProps> = ({ src, isMobile = false, isHeader = false }: ImageProps) => {
    const [loaded, setLoaded] = useState<boolean>(false)

    const onImageLoad = (): void => {
        setLoaded(true)
    }

    return (
      <>
          {!loaded && <Box component="div" sx={loadingContainer}><CircularProgress/></Box>}
          <Grow in={loaded} {...(loaded && { timeout: 800 })}>
              <Box component="img" sx={isHeader ? headerImageStyles(loaded) : imageStyles(isMobile)} onLoad={onImageLoad} src={src} alt="Hotel image" />
          </Grow>
      </>
    )
}

export default Image