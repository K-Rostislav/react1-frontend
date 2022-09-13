export const parseFavouritesLS = () => {
    const json = localStorage.getItem('favourites')
    return json ? JSON.parse(json) : [];
}