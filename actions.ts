"use server"

import { dogAPIData } from "./interfaces"

const API_BASE = "https://majazocom.github.io/Data/dogs.json";

export async function fetchDogs(): Promise<dogAPIData[]> {
    const response = await fetch(API_BASE);
    if (!response.ok){
        throw new Error(`Error HTTP status: ${response.status}`);
    }
    const data = await response.json();
    
    for(let i = 0; i < data.length; i++){
        data[i].id = i + 1;
    }
    
    return data;
}
