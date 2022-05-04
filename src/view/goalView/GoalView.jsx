import React, { useEffect } from "react"
import styles from './goalView.module.sass'
import '../../style/main.sass'

import GoalPhoto from '../../component/goal/GoalPhoto'

import AOS from 'aos'
import "aos/dist/aos.css"

function BgCircle() {
    return (
      <div className={styles.bgCircle}>
          <div className={styles.circleY}></div>
          <div className={styles.circleP}></div>
          <div className={styles.circleO}></div>
      </div>
    )
}

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


