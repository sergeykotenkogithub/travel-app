import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '@/types/place'

export const places: IPlace[] = [
    {
        _id: 'waawds597sw',
        slug: 'tokyo',
        description: 'wefwewegewwefew',
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        location: { country: 'Japan', city: 'Kyoto' },
        rating: 5,
        duration: '10 days',
        distance: 10453,
    },
    {
        _id: 'wa971aw4846dssad899s',
        slug: 'venezia',
        description: 'wefwewegewwefew',
        imagePath: 'http://localhost:3000/images/places/italy.jpg',
        location: { country: 'Italy', city: 'Venezia' },
        rating: 5,
        duration: '7 days',
        distance: 9453,
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}