'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

// Tutorial for searchbar https://www.youtube.com/watch?v=QoMHwks6hUA

const Search = () => {
    const [isTyping, setIsTyping] = useState(false);

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        setIsTyping(value.trim() !== "");
            if(value) {
                params.set("query", value);
            }
            else {
                params.delete("query");
            }
            replace(`${pathName}?${params.toString()}`, {scroll: false});
    }, 300);

  return (
    <div>
      <label htmlFor="search">
        Search
      </label>
      <input placeholder="search" defaultValue={searchParams.get('query')?.toString()} onChange={(e) => {handleSearch(e.target.value);}} />
    </div>
  )
}

export default Search
