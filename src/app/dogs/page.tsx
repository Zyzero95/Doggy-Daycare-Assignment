import { fetchDogs } from "../../../actions";
import DogCard from "../components/dogcard";

export default async function Page(){
    const data = await fetchDogs();
    return (
    <main>
        <h1>OUR DOGS</h1>
        <button className="search-btn">Search</button>
        <button className="filter-btn">Filter</button>
        {data.map((dog) => <DogCard key={dog.chipNumber} data={dog}  />)}
    </main>
    )
}