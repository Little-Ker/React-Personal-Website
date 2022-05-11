import React, { useEffect } from "react"
import styles from './goalView.module.sass'
import '../../style/main.sass'

import GoalPhoto from '../../component/goal/GoalPhoto'
import BgCircle from "../../component/bgCircle/BgCircle"

import AOS from 'aos'
import "aos/dist/aos.css"

function GoalView() {
    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.goalView}>
            <BgCircle />
            <div className={`container1280 ${styles.goal}`}>
                <div data-aos="fade-right" data-aos-duration="1000" className={styles.title}>
                    <h1>未來目標</h1>
                    <p>Goal</p>
                </div>
                <GoalPhoto />
            </div>
        </div>
    )
}

export default GoalView