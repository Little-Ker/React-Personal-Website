import React from "react"
import styles from './blackPoint.module.sass'
import '../../../style/main.sass'
import PropTypes from 'prop-types'

function BlackPoint(props) {
    const data = props.data
    function fadePos(index) {
        if(props.aosCloseAnim) return
        if(index % 2 === 1) return "fade-left"
        return "fade-right"
    }

    return (
        <div style={{marginTop: `${props.marginTopNum}px`}} className={styles.blackPoint}>
            {data.map((item, index) => (
                <div data-aos={fadePos(index)} key={index} style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${item.imgUrl})`}} className={`bg-fit ${styles.item}`}>
                    <div style={{backgroundColor: props.bgColor}} className={styles.blackHide}>
                        <p data-aos="flip-left" data-aos-delay="600">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

BlackPoint.propTypes = {
    data: PropTypes.array.isRequired,
    bgColor: PropTypes.string.isRequired,
    marginTopNum: PropTypes.number,
    aosCloseAnim: PropTypes.bool,
}

export default BlackPoint