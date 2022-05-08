import React from "react"
import styles from './interest.module.sass'
import clsx from 'clsx'

import LuggageIcon from '@mui/icons-material/Luggage'
import BrushIcon from '@mui/icons-material/Brush';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import TvIcon from '@mui/icons-material/Tv';

function Interest() {
    const interestList = [
        [{
            title: '看動畫', icon: <TvIcon className={styles.iconSize} />,
            content: '喜歡競技、運動類的動畫。'
        },
        {
            title: '休閒散步', icon: <DirectionsWalkIcon className={styles.iconSize} />,
            content: '當個快樂的健走社成員。'
        },
        {
            title: '排版設計', icon: <BrushIcon className={styles.iconSize} />,
            content: '喜歡欣賞漂亮網頁。'
        },
        {
            title: '旅遊', icon: <LuggageIcon className={styles.iconSize} />,
            content: '到處吃吃喝喝看世界。'
        }],
    ]
    return(
        <div className={styles.interest}>
            {interestList.map((val, index) => (
                <div key={index} className={styles.list}>
                    {val.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={clsx(styles.icon)}>
                                {item.icon}
                            </div>
                            <div className={styles.title}>{item.title}</div>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Interest