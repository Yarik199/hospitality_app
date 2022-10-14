export interface Filters {
    adults: number,
    children: number,
    rating: number
}

export interface Image {
    url: string,
    alt?: string
}

export interface Hotel {
    id: string,
    name: string,
    description: string,
    address1: string,
    address2: string,
    starRating: number,
    images: Image[]
}

export interface Room {
    hotelId: string,
    id: string,
    name: string,
    longDescription: string,
    occupancy: {
        maxAdults: number,
        maxChildren: number,
        maxOverall: number
    },
    images: Image[]
}

export interface Facility {
    code: string,
    name?: string
}