import React, { useState, useEffect } from "react"
import styles from './goalPhoto.module.sass'
import '../../style/main.sass'
import clsx from 'clsx'
import AOS from 'aos'
import "aos/dist/aos.css"

import goal01 from '../../assets/image/goal/goal01.jpg'
import goal02 from '../../assets/image/goal/goal02.jpg'
import goal03 from '../../assets/image/goal/goal03.jpg'

const goalList = [{
    title: "短期目標",
    imgUrl: goal01,
    content: [
        "學好 React",
        "準確認出同事"
    ]
},{
    title: "中期目標",
    imgUrl: goal02,
    content: [
        "獨立完成專案",
        "無須加班也能準時完成交付任務"
    ]
},{
    title: "長期目標",
    imgUrl: goal03,
    content: [
        "環遊世界",
        "吃遍世界美食！"
    ]
}]

function GoalPhoto() {
    const [selected, setSelected] = useState(0)
    const nextFn = () => {
        if(selected >= 2) return
        setSelected(selected + 1)
    }

    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.goalPhoto}>
            <div data-aos="zoom-out-down" data-aos-delay="1200" className={styles.photoList}>
                {goalList.map((item, index) => (
                    <div key={index} className={clsx(styles.photo, styles[`photo0${index + 1}`], (selected >= index && styles[`showPhoto0${index + 1}`]))}>
                        <img className={`img-fit ${styles.goalImg}`} src={item.imgUrl} alt="" />
                        <div className={styles.content}>
                            <div>
                                {item.content.map((txt, index) => (
                                    <p key={index}>{txt}</p>
                                ))} 
                            </div>
                        </div>
                        <div className={styles.title}>{item.title}</div>
                    </div>
                ))}
            </div>
            <div className={styles.right} data-aos="flip-left" data-aos-delay="2000">
                <div onClick={() => {nextFn()}} className={clsx(styles.rightBtn, selected === 2 && styles.hideRightBtn)}>Next</div>
            </div>
        </div>
    )
}

export default GoalPhoto