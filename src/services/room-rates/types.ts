import { Facility, Image } from '../../common/types'

export interface RoomRatesApiRequest {
    rooms: {
        id: string
        name: string,
        shortDescription: string,
        longDescription: string,
        occupancy: {
            maxAdults: number,
            maxChildren: number,
            maxOverall: number
        },
        disabledAccess: boolean,
        bedConfiguration: boolean,
        images: Image[],
        facilities: Facility[],
    }[],
    rates: {
        id: string,
        shortDescription?: string,
        longDescription?: string,
        prePayment?: string,
        cancellationPolicy?: {
            name?: string,
            text?: string,
            penalty?: string,
            applicable?: string,
            amount?: number,
            days?: number,
            hour?: string
        },
        prePaymentValue?: number,
        prePaymentIsPercentage?: boolean
    }[]
}