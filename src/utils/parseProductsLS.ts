export const parseProductsLS = () => {
    const json = localStorage.getItem('cart')
    return json ? JSON.parse(json) : [];
}