import { fetchDogs } from "../../../../actions";
import Image from "next/image"
import styles from "./profile.module.css";
import NotFound from "@/app/utils/not-found";
import { getPrevAndNext} from "@/app/utils/getPrevAndNext";
import RenderPrevAndNext from "@/app/utils/getPrevAndNext";
import Link from "next/link";

export default async function DogPage({params}: {params: Promise<{id:string}>}) {
    const id = (await params).id;
    const dogList = await fetchDogs();

    const dogObj = dogList.find((dog) => dog.chipNumber === id)
    const nav = getPrevAndNext(id, dogList);

    if (!dogObj){
        return NotFound();
    }
    if(!nav){
        return NotFound();
    }
    
    return (
        <div className={styles.profileBody}>
            <header className={styles.profileHeader}>
                <Image 
                    src={dogObj.img}
                    alt="doggo"
                    width={500}
                    height={100}
                />
            </header>
            <main className={styles.profileMain}>
                <div className={styles.profileWrapper}>
                <h2>{dogObj.name}</h2>
                <label htmlFor="present" className={styles.isPresent}>Is present
                    {dogObj.present === true? <p id="present">✅</p> : <p id="present">❌</p>}
                </label>
                <label htmlFor="dogname">Name:
                    <p id="dogname">{dogObj.name}</p>
                </label>
                <label htmlFor="ownername">Owner:
                    <p id="ownername">{dogObj.owner.name} {dogObj.owner.lastName}</p>
                </label>
               <label htmlFor="breed">Breed: 
                    <p id="breed">{dogObj.breed}</p>
               </label>
               <label htmlFor="phonenumber">Phone: 
                    <p id="phonenumber">{dogObj.owner.phoneNumber}</p>
               </label>
               <label htmlFor="age">Age: 
                    <p id="age">{dogObj.age} years</p>
               </label>
               <label htmlFor="email">E-mail: 
                    <p id="email">{dogObj.owner.name.toLowerCase()}.{dogObj.owner.lastName.toLowerCase()}@hotmail.com</p>
               </label>
               <label htmlFor="description" className={styles.description}>Description: 
                    <p id="description">Lorem ipsum dolor sit amet consectetur. Viverra at tellus nulla velit malesuada consequat dictum proin vel. Posuere sit fames cursus dui nisi. Eu posuere sit ultricies justo nec. Aliquam elementum nulla tristique sed non.</p>
               </label>
                </div>
            </main>
            <footer className={styles.profileFooter}>
                <RenderPrevAndNext index={nav.index} arr={dogList} prev={nav.prev} next={nav.next}/>
                <Link className={styles.profileHomeLink} href="/dogs">Home</Link>
            </footer>
        </div>
    )
}