import clsx from "clsx";
import React, { useState, useEffect } from "react"
import styles from './chooseBanner.module.sass'

function ChooseBanner(props) {
    const [chooseIndex, setChooseIndex] = useState(0)
    useEffect(() => {
        const imgUrl = props.pointList[chooseIndex];

        document.querySelector(`#${props.setBannerId}`).style.backgroundImage = `url(${imgUrl})`
    }, [chooseIndex]);

    return(
        <div id={props.setBannerId} style={{backgroundImage: `url(${props.pointList[0]})`}} className={`changeImg ${styles.poitImg}`}>
            <div className={clsx(styles.btnList, (props.btnPosRight && styles.btnPosRight)) }>
                {props.pointList.map((imgUrl, index) => (
                    <div key={index} onClick={() => setChooseIndex(index)} style={{backgroundImage: `url(${imgUrl})`}} className={styles.btn}></div>
                ))}
            </div>
        </div>
    )
}

export default ChooseBanner