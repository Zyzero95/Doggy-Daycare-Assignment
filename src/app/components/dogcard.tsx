import React from 'react'
import { dogAPIData } from "../../../interfaces";
import Image from 'next/image';
import femaleSymbol from "@/app/images/femalesymbol.png";
import maleSymbol from "@/app/images/malesymbol.png";
import Link from 'next/link';

export interface DogData {
    data: dogAPIData
}

export default function DogCard({ data }: DogData) {
  return (
    <Link className="dogCardLink"  href={`/dogs/${data.chipNumber}`}>
    <div className={data.present ? "dogCard bg-green" : "dogCard bg-red"}>
        
        <Image 
            className='dogImg'
            src={data.img}
            width={200}
            height={100}
            alt="Look at this doggo"
        />
      <h3 className="dogName">{data.name}</h3>
        {data.sex === "female" ? 
        <Image 
        className='genderImg'
        src={femaleSymbol}
        alt="female gender symbol"
        width={25}
        height={100}
        /> : 
        <Image 
        className='genderImg'
        src={maleSymbol}
        alt="male gender symbol"
        width={25}
        height={100}
        />}
      <h3 className='dogAge'>{data.age}y/o</h3>
      <p className='dogBreed'>{data.breed}</p>
      <p className='dogOwner'>OWNER: {data.owner.name} {data.owner.lastName}</p>
    </div>
    </Link>
  )
}
