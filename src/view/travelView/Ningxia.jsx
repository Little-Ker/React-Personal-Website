import React, { useEffect } from "react"

import styles from './ningxia.module.sass'
import '../../style/main.sass'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTravelData} from '../../redux/travelSlice'

import AOS from 'aos'
import "aos/dist/aos.css"

import bg01 from '../../assets/image/ningxia/bg01.jpg'
import bg02 from '../../assets/image/ningxia/bg02.jpg'
import paper from '../../assets/image/ningxia/paper.png'

const imgSize = (size) => {
    return {
        width: `${size}%`
    };
}

function BlackPoint(props) {
    return (
        <div className={styles.mountain}>
            {props.data.map((item, index) => (
                <div key={index} style={{backgroundImage: `url(${item.imgUrl})`}} className={styles.mountainImg}>
                    <div className={styles.blackHide}>
                        <p data-aos="flip-left">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Point(props) {
    return (
        <div className={`container1280 ${styles.point}`}>
            <div className={styles.list}>
                <div data-aos="fade-left" className={styles.item} style={imgSize(props.size01)}>
                    <p>{props.data.title01}</p>
                    <img className="img-fit" src={props.data.imgUrl01} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className={styles.item} style={imgSize(props.size02)}>
                    <p>{props.data.title02}</p>
                    <img className="img-fit" src={props.data.imgUrl02} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="600" className={styles.item} style={imgSize(props.size03)}>
                    <p>{props.data.title03}</p>
                    <img className="img-fit" src={props.data.imgUrl03} alt="" />
                </div>
            </div>
        </div>
    )
}

function Introduce(props) {
    return (
        <div className={`container1280 ${styles.introduce}`}>
            <img src={paper} className={styles.paper} alt="" />
            <img data-aos="fade-right" data-aos-anchor-placement="center-center" src={props.data.imgUrl} alt="圖片" className={`img-fit ${styles.introduceImg}`} />
            <p data-aos="fade-left" data-aos-anchor-placement="center-center" className={styles.introduceTxt}>{props.data.content}</p>
        </div>  
    )
}

function Banner(props) {
    return (
        <div className={styles.banner}>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className={styles.title}>
                <span>海旅會研學之旅</span>
                <br></br>
                <span>{props.data.title}文化</span>
            </p>
            <div style={{backgroundImage: `url(${props.data.banner})`}} className={styles.bannerImg}></div>
        </div>
    )
}

function Footer(props) {
    return (
        <div className={styles.footer}>
            <p>華夏文明 薪火相傳 - {props.data.title}研學之旅</p>
        </div>  
    )
}

function Ningxia() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTravelData())
        AOS.init({
            duration : 800
        })
    }, [dispatch])

    const travelNingxiaData = useSelector(state => state.travelDate.travelNingxiaData)

    if (travelNingxiaData.length === 0) return
    return (
        <div style={{backgroundImage: `url(${bg01})`}} className={`${styles.ningxia}`}>
            <Banner data={travelNingxiaData.introduce} />
            <Introduce data={travelNingxiaData.introduce} />
            <BlackPoint data={travelNingxiaData.camel} />
            <div style={{backgroundImage: `url(${bg02})`}} className={`bg-fit ${styles.desertBg}`}>
                <Point data={travelNingxiaData.movie} size01={25} size02={50} size03={25} />
                <Point data={travelNingxiaData.yellowRiver} size01={50} size02={25} size03={25} />
            </div>
            <BlackPoint data={travelNingxiaData.mountain} />
            <Footer data={travelNingxiaData.introduce} />
        </div>
    )
}

export default Ningxia;