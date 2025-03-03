'use client'
import { useState } from "react";
import styles from "./present.module.css";

export default function PresentToggle ({ present }: {present: boolean}) {
    const [toggle, setToggle] = useState(present);

    function handleClick() {
        setToggle(toggle === !true ? true : false);
    }

    return (
        <div className={styles.toggleWrapper}>
            <label className={styles.presentCheckbox} htmlFor="presentCheck"> 
                <input id="presentCheck" type="checkbox" checked={toggle} onChange={handleClick} />
            </label>
            {toggle ? <p className={styles.presentIcon} id="present">✅</p> : <p className={styles.presentIcon} id="present">❌</p>}
        </div>
    )
}