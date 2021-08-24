import { useState, useEffect } from 'react'

// Function to persist data
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key))

  if(savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue
}


// Custom Hook
export default function useLocalStorage(key, initialValue) {

  // Function is used in useState to avoid calling JSON.parse and localStorage at each rerendering.
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}