import React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating/Rating'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import useMediaQuery from '@mui/material/useMediaQuery'
import { OPERATION_TYPES, FILTER_TYPES } from '../../common/constants'
import {
    filterBarSection,
    ratingContainer,
    adultsContainer,
    childrenContainer,
    iconButtonStyles,
    iconStyles
} from './styles'
import { Filters } from '../../common/types'

export interface FilterBarProps {
    onFiltersUpdate: (field: string, value: number) => void,
    filters: Filters
}

const FilterBar: React.FC<FilterBarProps> = ({ onFiltersUpdate, filters }) => {
    const { rating, adults, children }: Filters = filters
    const isMobile = useMediaQuery<string>('(max-width:400px)')

    const onAdultsChange = (type: string): void => {
        if ((type === OPERATION_TYPES.ADD && adults + 1 > 20) || (type === OPERATION_TYPES.REMOVE && adults - 1 < 1)) return
        if (type === OPERATION_TYPES.ADD) {
            return onFiltersUpdate(FILTER_TYPES.ADULTS, adults + 1)
        }
        return onFiltersUpdate(FILTER_TYPES.ADULTS, adults - 1)
    }

    const onChildrenChange = (type: string): void => {
        if ((type === OPERATION_TYPES.ADD && children + 1 > 20) || (type === OPERATION_TYPES.REMOVE && children - 1 < 0)) return
        if (type === OPERATION_TYPES.ADD) {
            return onFiltersUpdate(FILTER_TYPES.CHILDREN, children + 1)
        }
        return onFiltersUpdate(FILTER_TYPES.CHILDREN, children - 1)
    }

    const onRatingChange = (value: number): void => {
        return onFiltersUpdate(FILTER_TYPES.RATING, value)
    }

    return (
        <Box component="section" sx={filterBarSection(isMobile)}>
            <Box sx={ratingContainer}>
                <Rating value={rating} onChange={(event, value) => onRatingChange(value || 0)} />
            </Box>
            <Box sx={adultsContainer}>
                <Box component="span">Adults:</Box>
                <IconButton aria-label="add" color="primary" sx={iconButtonStyles} onClick={() => onAdultsChange(OPERATION_TYPES.ADD)}>
                    <AddIcon sx={iconStyles}/>
                </IconButton>
                <Box component="span">{adults}</Box>
                <IconButton aria-label="remove" color="primary" sx={iconButtonStyles} onClick={() => onAdultsChange(OPERATION_TYPES.REMOVE)}>
                    <RemoveIcon sx={iconStyles}/>
                </IconButton>
            </Box>
            <Box sx={childrenContainer}>
                <Box component="span">Children:</Box>
                <IconButton aria-label="add" color="primary" sx={iconButtonStyles} onClick={() => onChildrenChange(OPERATION_TYPES.ADD)}>
                    <AddIcon sx={iconStyles}/>
                </IconButton>
                <Box component="span">{children}</Box>
                <IconButton aria-label="remove" color="primary" sx={iconButtonStyles} onClick={() => onChildrenChange(OPERATION_TYPES.REMOVE)}>
                    <RemoveIcon sx={iconStyles}/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default FilterBar