import type { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from "../../app/types/place"
import japanImg from '../../assets/images/japan.jpg'
import italyImg from '../../assets/images/italy.jpg'

const places: IPlace[] = [
    {
        slug: 'tokyo',
        description: 'wdwddw',
        distance: 10453,
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        location: { country: "Japan", city: "Kyoto" },
        duration: '10 days',
        raiting: 5,
        googleMapLink: 'test',
        mapImage: 'www'
    },
    {
        slug: 'venezia',
        description: 'wdwddw',
        distance: 9453,
        imagePath: 'http://localhost:3000/images/places/italy.jpg',
        location: { country: "Italy", city: "Venezia" },
        duration: '7 days',
        raiting: 5,
        googleMapLink: 'test',
        mapImage: 'www'
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}