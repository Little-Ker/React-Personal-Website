import React, { useState, useEffect } from "react"
import styles from './choosePhoto.module.sass'
import clsx from 'clsx'

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
    useEffect(() => {
        document.querySelector('#photoTitle').innerHTML = pList[photoIndex].title
        document.querySelector('#photoTxt').innerHTML = pList[photoIndex].txt
    }, [photoIndex])

    return (
        <div className={styles.choosePhoto}>
            <div className={styles.photoList}>
                {photoPosList.map((pos, index) => (
                    <div key={index} data-aos="zoom-out-up" data-aos-anchor-placement="top-center" data-aos-delay={500 * index}>
                        <div onClick={() => setPhotoIndex(index)} style={photoPosStyle(pos.left, pos.top, pos.rotate)} className={clsx(styles.photoBg, styles[`photo0${[index]}`], photoIndex === index && styles.active)}>
                            <img src={pList[index].imgUrl} className="img-fit" alt="圖片" />
                            <p className={styles.photoTxt}>{pList[index].title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos="fade-left" data-aos-delay="1500" className={styles.txt}>
                <h2 id="photoTitle">{pList[2].title}</h2>
                <p id="photoTxt">{pList[2].txt}</p>
            </div>
        </div>
    )
}

export default ChoosePhoto