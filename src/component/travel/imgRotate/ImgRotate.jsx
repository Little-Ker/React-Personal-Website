import React from "react"
import PropTypes from 'prop-types'
import styles from './imgRotate.module.sass'

function ImgRotate(props) {
    return (
        <div className={styles.flip}>
            <div style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${props.item.imgUrl})`}} className={styles.imgCircle}></div>
            <div style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${props.item.imgUrlHover})`}} className={`${styles.imgCircle} ${styles.back}`}></div>
        </div>
    )
}

export default ImgRotate

ImgRotate.propTypes = {
    item: PropTypes.object.isRequired
}