import React, { useEffect } from "react"
import styles from './yearLine.module.sass'
import AOS from 'aos'
import "aos/dist/aos.css"

const yearList = [
    '2019', '2020', '2021', '2022'
]

function timeLineDelay(index) {
    if(index <= 2) return 300 * (index - 1)
    return 0
}

function timeLineShowAnim(index) {
    if(index === 0) return ''
    return 'fade-up'
}

function YearLine() {
    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.yearLine}>
            {yearList.map((item, index) => (
                <div data-aos={timeLineShowAnim(index)} data-aos-delay={timeLineDelay(index)} key={index} className={styles.yearDot}>
                    <p>{item}</p>
                </div>
            ))}
        </div>
    )
}

export default YearLine