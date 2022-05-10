import clsx from "clsx"
import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import styles from './chooseBanner.module.sass'

function ChooseBanner(props) {
    const [chooseIndex, setChooseIndex] = useState(0)
    useEffect(() => {
        const imgUrl = props.pointList[chooseIndex]

        document.querySelector(`#${props.setBannerId}`).style.backgroundImage = `url(${process.env.REACT_APP_BASE_URL}${imgUrl})`
    }, [chooseIndex])

    return(
        <div id={props.setBannerId} style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${props.pointList[0]})`}} className={`changeImg ${styles.poitImg}`}>
            <div className={clsx(styles.btnList, (props.btnPosRight && styles.btnPosRight)) }>
                {props.pointList.map((imgUrl, index) => (
                    <div key={index} onClick={() => setChooseIndex(index)} style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${imgUrl})`}} className={styles.btn}></div>
                ))}
            </div>
        </div>
    )
}

export default ChooseBanner

ChooseBanner.propTypes = {
    pointList: PropTypes.array.isRequired,
    setBannerId: PropTypes.string.isRequired,
    btnPosRight: PropTypes.bool.isRequired
}