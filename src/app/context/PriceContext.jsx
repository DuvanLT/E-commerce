"use client"
import { createContext, useState } from 'react'

export const PriceContext = createContext()

export const PriceProvider = ({ children }) => {
  const [priceRange, setPriceRange] = useState({ start: 0, end: Infinity })

  return (
    <PriceContext.Provider value={{ priceRange, setPriceRange }}>
      {children}
    </PriceContext.Provider>
  )
}