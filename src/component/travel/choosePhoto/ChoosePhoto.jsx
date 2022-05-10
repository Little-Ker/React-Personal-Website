import React, { useState, useEffect } from "react"
import styles from './choosePhoto.module.sass'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const photoPosStyle = (left, top, rotate) => {
    return {
        left: `${left}px`,
        top: `${top}px`,
        transform: `rotate(${rotate}deg)`
    }
}

function ChoosePhoto(props) {
    const pList = props.data
    const photoPosList = [{
        left: 265,
        top: 290,
        rotate: 24
    },{
        left: 5,
        top: 120,
        rotate: -18
    },{
        left: 270,
        top: -50,
        rotate: 5
    }]

    const [photoIndex, setPhotoIndex] = useState(2)
    const [title, setTitle] = useState("")
    const [txt, setTxt] = useState("")
    useEffect(() => {
        setTitle(pList[photoIndex].title)
        setTxt(pList[photoIndex].txt)
    }, [photoIndex])

    return (
        <div className={`container1280 ${styles.choosePhoto}`}>
            <div className={styles.photoList}>
                {photoPosList.map((pos, index) => (
                    <div key={index} data-aos="zoom-out-up" data-aos-anchor-placement="top-center" data-aos-delay={500 * index}>
                        <div onClick={() => setPhotoIndex(index)} style={photoPosStyle(pos.left, pos.top, pos.rotate)} className={clsx(styles.photoBg, styles[`photo0${[index]}`], photoIndex === index && styles.active)}>
                            <img src={`${process.env.REACT_APP_BASE_URL}${pList[index].imgUrl}`} className="img-fit" alt="圖片" />
                            <p className={styles.photoTxt}>{pList[index].title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos="fade-left" data-aos-delay="1500" className={styles.txt}>
                <h2 id="photoTitle">{title}</h2>
                <p id="photoTxt">{txt}</p>
            </div>
        </div>
    )
}

export default ChoosePhoto

ChoosePhoto.propTypes = {
    data: PropTypes.array.isRequired
}