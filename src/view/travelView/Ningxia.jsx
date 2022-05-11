import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import styles from './ningxia.module.sass'
import '../../style/main.sass'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTravelData} from '../../redux/travelSlice'

import AOS from 'aos'
import "aos/dist/aos.css"

import BlackPoint from "../../component/travel/blackPoint/BlackPoint"
import Footer from "../../component/travel/footer/Footer"

import bg01 from '../../assets/image/ningxia/bg01.jpg'
import bg02 from '../../assets/image/ningxia/bg02.jpg'
import paper from '../../assets/image/ningxia/paper.png'

const imgSize = (size) => {
    return {
        width: `${size}%`
    }
}

function Point(props) {
    const { data, size01, size02, size03, className } = props
    return (
        <div className={`container1280 ${styles.point}`}>
            <div className={`${styles[className]} ${styles.list}`}>
                <div data-aos="fade-left" className={styles.item} style={imgSize(size01)}>
                    <p>{data.title01}</p>
                    <img className="img-fit" src={`${process.env.REACT_APP_BASE_URL}${data.imgUrl01}`} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className={styles.item} style={imgSize(size02)}>
                    <p>{data.title02}</p>
                    <img className="img-fit" src={`${process.env.REACT_APP_BASE_URL}${data.imgUrl02}`} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-delay="600" className={styles.item} style={imgSize(size03)}>
                    <p>{data.title03}</p>
                    <img className="img-fit" src={`${process.env.REACT_APP_BASE_URL}${data.imgUrl03}`} alt="" />
                </div>
            </div>
        </div>
    )
}

Point.propTypes = {
    data: PropTypes.object.isRequired,
    size01: PropTypes.number.isRequired,
    size02: PropTypes.number.isRequired,
    size03: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired
}

function Introduce(props) {
    const data = props.data
    return (
        <div className={`container1280 ${styles.introduce}`}>
            <img src={paper} className={styles.paper} alt="" />
            <img data-aos="fade-right" src={`${process.env.REACT_APP_BASE_URL}${data.imgUrl}`} alt="圖片" className={`img-fit ${styles.introduceImg}`} />
            <p data-aos="fade-left" className={styles.introduceTxt}>{data.content}</p>
        </div>  
    )
}

Introduce.propTypes = {
    data: PropTypes.object.isRequired
}

function Banner(props) {
    const data = props.data
    return (
        <div className={styles.banner}>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className={styles.title}>
                <span>海旅會研學之旅</span>
                <br></br>
                <span>{data.title}文化</span>
            </p>
            <div style={{backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${data.banner})`}} className={styles.bannerImg}></div>
        </div>
    )
}

Banner.propTypes = {
    data: PropTypes.object.isRequired
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
            <BlackPoint data={travelNingxiaData.camel} bgColor="#000000aa" />
            <div style={{backgroundImage: `url(${bg02})`}} className={`bg-fit ${styles.desertBg}`}>
                <Point data={travelNingxiaData.movie} size01={25} size02={50} size03={25} className="moviePoint" />
                <Point data={travelNingxiaData.yellowRiver} size01={50} size02={25} size03={25} className="yellowRiverPoint" />
            </div>
            <BlackPoint data={travelNingxiaData.mountain} bgColor="#000000aa" aosCloseAnim={true} />
            <Footer txt={`華夏文明 薪火相傳 - ${travelNingxiaData.introduce.title}研學之旅`} bgColor="#333" />
        </div>
    )
}

export default Ningxia