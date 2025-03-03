import { fetchDogs } from "../../../actions";
import DogCard from "./dogcard";

// Tutorial for DogList https://www.youtube.com/watch?v=QoMHwks6hUA

const DogList = async ({ query, filter }: {query: string, filter: string}) => {
    const dogs = await fetchDogs();

    // Filter dogs if filter URL contains present or notpresent.
    const filterDogsPresent = dogs.filter((dog) => {
      if(filter === "present" && dog.present === true){
        return dog;
      }
      else if(filter === "notpresent" && dog.present === false){
        return dog;
      }
    })

  // If URL for filter is empty we use the default API JSON, if filter is used then we use that array instead to find dogs that includes user input letters.
  const filteredDogs = Array.isArray(dogs) ? 
    (filterDogsPresent.length === 0 ? 
      dogs.filter((dog) => {
        return dog.name.toLowerCase().includes(query.toLowerCase());
      }) : 
      filterDogsPresent.filter((dog) => {
        return dog.name.toLowerCase().includes(query.toLowerCase());
      })
    ) : [];

  return (
    <div>
      {Array.isArray(dogs) && dogs.length === 0 && (
        <p>No dogs found</p>
      )}
      <div>
        {Array.isArray(dogs) && filteredDogs.map((dog) => <DogCard key={dog.chipNumber} data={dog}  />)}
      </div>
    </div>
  )
}

export default DogList
