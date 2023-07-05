export const getProd = (value) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
}

export const getItem= (value) => {
    return fetch(`https://api.mercadolibre.com/items/${value}`)
}



