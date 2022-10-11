import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '@/types/place'

export const places: IPlace[] = [
    {
        slug: 'tokyo',
        description: 'wefwewegewwefew',
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        location: { country: 'Japan', city: 'Kyoto', regionUn: 'Asia' },
        rating: 5,
        duration: '10 days',
        distance: 10453,
        googleMapLink: 'wefewf',
        mapImage: 'egfw',
    },
    {
        slug: 'venezia',
        description: 'wefwewegewwefew',
        imagePath: 'http://localhost:3000/images/places/italy.jpg',
        location: { country: 'Italy', city: 'Venezia', regionUn: 'Europe' },
        rating: 5,
        duration: '7 days',
        distance: 9453,
        googleMapLink: 'wefewf',
        mapImage: 'egfw',
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}