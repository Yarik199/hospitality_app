import { Facility, Image } from '../../common/types'

export interface HotelsApiRequest {
    id: string,
    name: string,
    description: string,
    address1: string,
    address2: string,
    postcode: string,
    town: string,
    country: string,
    countryCode: string,
    starRating: string,
    facilities: Facility[],
    telephone: string,
    email: string,
    images: Image[],
    checkInHours: string,
    checkInMinutes: string,
    checkOutHours: string,
    checkOutMinutes: string,
    position: {
        latitude: number,
        longitude: number,
        timezone: string
    }
}