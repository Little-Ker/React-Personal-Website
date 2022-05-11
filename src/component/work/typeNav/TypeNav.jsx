import React, { useState, useEffect } from "react"
import styles from './typeNav.module.sass'
import clsx from "clsx"

const typeList = [ '遊戲', '網頁' ]

function TypeNav() {
    const [typeIndex, setTypeIndex] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollBarTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollBarTop <= 550) {
                setTypeIndex(0)
                return
            }
            setTypeIndex(1)
        })
    })

    return (
        <div className={styles.typeNav}>
            <div className={styles.title}>
                <h1>工作經驗</h1>
                <p>Experience</p>
            </div>
            <div className={styles.typeNavList}>
                {typeList.map((type, index) => (
                    <p id={`type${index}`} key={index} className={clsx(styles.type, (index === typeIndex && styles.active)) }>{type}</p>
                ))}
            </div>
        </div>
    )
}

export default TypeNav