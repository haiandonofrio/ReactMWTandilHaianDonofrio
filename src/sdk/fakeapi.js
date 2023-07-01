export const fakelist = (limit) => {
    return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
}


