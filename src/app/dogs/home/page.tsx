
import { fetchDogs } from "../../../../actions";


export default async function Page() {
    const data = await fetchDogs();
    console.log(data);
    return (
        <h1>{data[0].name}</h1>
    )
}