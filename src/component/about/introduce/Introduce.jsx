import React, { useState } from "react"
import styles from './introduce.module.sass'
import clsx from 'clsx'

import Environment from '../environment/Environment'
import Family from '../family/Family'
import Interest from '../interest/Interest'

function Introduce() {
    const [selected, setSelected] = useState(0)

    const data = [
        {   title: '成長環境',
            content: <Environment />
        },
        {   title: '家庭成員',
            content: <Family />
        },
        { title: '興趣',
            content: <Interest />
        },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h1>關於我</h1>
                <p>About Me</p>
            </div>
            <div className={styles.chooseList}>
                {data.map((val, index) => (
                    <div key={index}>
                        <div onClick={() => {setSelected(index)}} className={clsx(styles.chooseBox, selected === index && styles.active)}>
                            <p>{val.title}</p>
                        </div>
                        <div className={clsx(styles.chooseBoxAns, selected === index && styles.activeShow)}>
                            {val.content}                             
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default Introduce