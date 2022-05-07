import React, { useEffect } from "react"
import styles from './aboutView.module.sass'
import '../../style/main.sass'

import Me from '../../component/about/me/Me'
import Introduce from '../../component/about/introduce/Introduce'

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

function AboutView() {
    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.bg}>
            <BgCircle />
            <div className='container1280' >
                <Me />
                <Introduce />
            </div>
        </div>
    )
}
export default AboutView