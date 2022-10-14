export const queries = {
    getPlaces: `*[_type == "place" ]`,
    getPlace: (slug: string) => `*[_type == "place" && slug.current == "${slug}"][0]{location, imagePath, description, rating, duration}`,
    addToFavorities: (_id: string) => { }
}

