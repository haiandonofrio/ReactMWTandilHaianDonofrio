import React from 'react'

export const useDebounce = (value, delay) => {
    const [inputValue, setInputValue] = React.useState(value)
    const currentValue = React.useRef(null)
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
