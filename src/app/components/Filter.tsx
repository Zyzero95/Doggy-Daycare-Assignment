'use client'
import { useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

function Filter() {
    const [selectedOption, setSelectedOption] = useState("DEFAULT")

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        setSelectedOption(value);
        if(value !== "DEFAULT"){
            params.set("filter", value.toLowerCase());
        }
        else {
            params.delete("filter");
        }
        replace(`${pathName}?${params.toString()}`, {scroll: false});
    }

  return (
    <div>
        <select onChange={(e) => {handleChange(e.target.value)}} defaultValue={selectedOption}>
            <option value="DEFAULT">Filter</option>
            <option value="PRESENT">Present</option>
            <option value="NOTPRESENT">Not present</option>
        </select>
    </div>
  )
}

export default Filter
