import { fetchDog } from "../../../../actions";

export default async function DogPage({params}: {params: Promise<{chipNumber:number}>}) {
    const id = (await params).chipNumber;
    console.log(id)
}