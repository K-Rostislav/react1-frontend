export const parseProductsLS = () => {
    const data = localStorage.getItem('cart')
    return data ? JSON.parse(data) : []
}