import React from 'react'

export const useDebounce = (value, delay) => {
    const [inputValue, setInputValue] = React.useState(value)
    
    React.useEffect(
        () => {
            const timer = setTimeout(() => {
                setInputValue(value)
            }, delay)
            return () => {
                clearTimeout(timer)
            }
        },
        [value, delay]
    )

    return inputValue
}
