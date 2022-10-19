import { useState } from 'react'
import { Filters } from '../../common/types'

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

export default useFilters