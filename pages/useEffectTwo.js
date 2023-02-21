import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../styles/UseEffectTwo.module.css"

export default function UseEffectTwo() {
    const [ number, setNumber ] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <>
            <Link className={styles.home} href="/">Home</Link>
            <div className={styles.effectTwo}>
                <h1>UseEffect Two</h1>
                <p>{number}</p>
            </div>
        </>
    )
}