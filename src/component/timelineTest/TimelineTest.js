import React from "react"
import styles from './timelineTest.module.sass'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

const companyData = [
    { title: '長青資訊', time: '2019/07 ~ 2021/06', job: '遊戲前端', content: 'h5遊戲開發', icon: <SportsEsportsIcon /> },
    { title: '弈樂科技', time: '2022/04 ~ ',  job: '網頁前端', content: '後台前端', icon: <LaptopMacIcon /> },
]

const TimelineTest = () => {
    return (
        <div>
            <Timeline>
            {companyData.map((value, index) => (
                <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                    {value.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ boxShadow: 3 }}>{value.icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className={styles.ex}>
                        <div className={styles.title}>
                            <div>{value.title}</div>
                            <div>{value.job}</div> 
                        </div>
                        <p>{value.content}</p>
                    </div>
                </TimelineContent>
                </TimelineItem>
            ))}
            </Timeline>
        </div>
    )
}

export default function Work() {
    return (
        <div>
            <div>
                <h1>Work</h1>
                <TimelineTest />
            </div>
        </div>
    )
}