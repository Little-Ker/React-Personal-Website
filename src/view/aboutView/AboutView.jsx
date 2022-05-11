import React, { useEffect } from "react"
import styles from './aboutView.module.sass'
import '../../style/main.sass'

import Me from '../../component/about/me/Me'
import Introduce from '../../component/about/introduce/Introduce'
import BgCircle from "../../component/bgCircle/BgCircle"

import AOS from 'aos'
import "aos/dist/aos.css"

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