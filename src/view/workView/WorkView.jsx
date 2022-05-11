import React, { useEffect } from "react"
import styles from './workView.module.sass'
import '../../style/main.sass'

import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WebOutlinedIcon from '@mui/icons-material/WebOutlined'
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined'

import TypeNav from '../../component/work/typeNav/TypeNav'
import YearLine from '../../component/work/yearLine/YearLine'
import BgCircle from "../../component/bgCircle/BgCircle"

import AOS from 'aos'
import "aos/dist/aos.css"

const workList = [{
    company: "長青資訊",
    icon: <SportsEsportsIcon className={styles.iconSize} />,
    txt: [ "遊戲前端工程師", "13 款老虎機遊戲", "1 款骰寶遊戲" ]
},{
    company: "轉職時期",
    icon: <EditRoadOutlinedIcon className={styles.iconSize} />,
    txt: [ "自學網頁前端技術", "Vue 框架" ]
},{
    company: "弈樂科技",
    icon: <WebOutlinedIcon className={styles.iconSize} />,
    txt: [ "後臺前端工程師", "React 框架", "個人介紹網站" ]
}]

function Work() {
    return(
        <div className={styles.workList}>
            {workList.map((item, index) => (
                <div key={index} className={styles.workContent}>
                    <div className={styles.top}>
                        <div className={styles.icon}>{item.icon}</div>
                        <p>{item.company}</p>
                    </div>
                    <div className={styles.work}>
                        {item.txt.map((txt, index) => (
                            <p data-aos="fade-left" data-aos-delay={300 * index} key={index} className={styles.txt}>{txt}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

function WorkView() {
    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.workView}>
            <BgCircle />
            <TypeNav />
            <div className={styles.rightContent}>
                <YearLine />
                <Work />
            </div>
        </div>
    )
}

export default WorkView