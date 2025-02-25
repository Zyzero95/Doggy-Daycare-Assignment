"use server"

import { dogAPIData } from "./interfaces"

const API_BASE = "https://majazocom.github.io/Data/dogs.json";

export async function fetchDogs(): Promise<dogAPIData[]> {
    const response = await fetch(API_BASE);
    if (!response.ok){
        throw new Error(`Error HTTP status: ${response.status}`);
    }
    const data = await response.json();
    
    return data;
}

export async function fetchDog(chipNumber: number) {
    const data = await fetchDogs();
    const dogData = [];

    for(let i = 0; i<data.length; i++){
        if(data[i].chipNumber === chipNumber){
            dogData.push(data[i]);
        }
    }
    return dogData;
}