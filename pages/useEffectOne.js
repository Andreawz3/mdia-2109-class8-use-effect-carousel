import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../styles/UseEffectOne.module.css"

export default function UseEffectOne() {

    const [ number, setNumber ] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })

    return(
        <>
            <Link className={styles.home} href="/">Home</Link>
            <div className={styles.effectOne}>
                <h1>UseEffect One</h1>
                <p>{number}</p>
            </div>
        </>
    )
}