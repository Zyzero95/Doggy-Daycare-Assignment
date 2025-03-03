
import Search from "../components/Search";
import DogList from "../components/DogList";
import Filter from "../components/Filter";

export default async function Page({searchParams}: {searchParams?: {query?: string; filter?: string};}) {
    const query = searchParams?.query || '';
    const filter = searchParams?.filter || '';
    return (
    <main>
        <h1>OUR DOGS</h1>
        <Search />
        <Filter />
        <DogList query={query} filter={filter}/>
    </main>
    )
}