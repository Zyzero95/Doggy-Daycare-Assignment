
import Search from "../components/Search";
import DogList from "../components/DogList";

export default async function Page({searchParams}: {searchParams?: {query?: string;};}) {
    const query = searchParams?.query || '';

    return (
    <main>
        <h1>OUR DOGS</h1>
        <Search />
        <button className="filter-btn">Filter</button>
        <DogList query={query}/>
    </main>
    )
}