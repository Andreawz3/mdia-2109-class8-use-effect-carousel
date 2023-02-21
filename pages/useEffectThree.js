import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/UseEffectThree.module.css"

export default function UseEffectThree() {
    const [ number, setNumber ] = useState(0);

    const [ value, setValue ] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>
            <Link className={styles.home} href="/">Home</Link>
            <div className={styles.effectThree}>
                <h1>UseEffect Three</h1>               
                <p>{value}</p>
                <button onClick={() => setNumber(number + 1)}>Click me</button>
            </div>
        </>
    )
}