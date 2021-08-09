import { useEffect, useState } from "react";

// prefix avoids conflict between local storage on different localhost apps
const PREFIX = "song-request"

// custom hook to store code in local storage
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    // use callback to minimize times local storage is parsed into js (since it's a slow process)
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
    })

    // anytime key or value changes, update local storage
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [value, prefixedKey])

    return [value, setValue]
}
