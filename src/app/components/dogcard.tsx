import React from 'react'
import { dogAPIData } from "../../../interfaces";

interface DogData {
    data: dogAPIData
}

export default function DogCard({ data }: DogData) {
  return (
    <div>
      {data.name}
    </div>
  )
}
