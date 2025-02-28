import Link from "next/link";
import { dogAPIData } from "../../../interfaces";
import styles from "./nav.module.css"

export function getPrevAndNext(activeId: string, arr: Array<dogAPIData>) {
    const index = arr.findIndex((a) => a.chipNumber === activeId)
    
    const prev = arr[index - 1];

    const next = arr[index + 1];

    return {index, prev, next}
}

export default function RenderPrevAndNext({index, arr, prev, next}: {index: number, arr: Array<dogAPIData>, prev: dogAPIData, next: dogAPIData}){
    return (
        <div className={styles.navWrapper}>
            {prev? <Link className={styles.linkPrev} href={`/dogs/${prev.chipNumber}`}>Previous</Link> : <p className={styles.linkPrev}>First</p>}
            {index?<p className={styles.pageInfo}>{index + 1}</p>:<p className={styles.pageInfo}>1</p>} <p className={styles.pageInfo}>of</p> {arr?<p className={styles.pageInfo}>{arr.length}</p>:<p className={styles.pageInfo}>cannot find list of dogs.</p>}
            {next? <Link className={styles.linkNext} href={`/dogs/${next.chipNumber}`}>Next</Link> : <p className={styles.linkNext}>Last</p>}
        </div>
    )
}