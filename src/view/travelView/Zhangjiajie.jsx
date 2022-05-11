import React, { useEffect } from "react"
import styles from './zhangjiajie.module.sass'
import '../../style/main.sass'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTravelData} from '../../redux/travelSlice'

import bannerBg from '../../assets/image/zhangjiajie/bg01.jpg'
import circleBg from '../../assets/image/zhangjiajie/bg02.png'
import logo from '../../assets/image/zhangjiajie/logo.png'
import cloud2 from '../../assets/image/zhangjiajie/cloud02.png'
import txtBg from '../../assets/image/zhangjiajie/circleTxtBg.png'

import ChoosePhoto from '../../component/travel/choosePhoto/ChoosePhoto'
import Cloud from '../../component/travel/cloud/Cloud'
import BlackPoint from "../../component/travel/blackPoint/BlackPoint"
import Footer from "../../component/travel/footer/Footer"

import AOS from 'aos'
import "aos/dist/aos.css"

function Title() {
    return (
        <div className={styles.title}>
            <p data-aos="fade-up-right" data-aos-delay="100">張</p>
            <p data-aos="fade-left" data-aos-delay="300">家</p>
            <p data-aos="fade-up-right" data-aos-delay="500">界</p>
            <img data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="1000" className={styles.logo} src={logo} alt="圖片" />
        </div>
    )
}

function CirclePointBg() {
    return (
        <div style={{backgroundImage: `url(${circleBg})`}} className={`bg-fit ${styles.circlePointBg}`}>
            <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" className={styles.cloud}>
                <img src={cloud2} alt="圖片" />
            </div>
        </div>
    )
}

function CirclePoint(props) {
    const data = props.data
    return (
        <div className={styles.circlePointList}>
            {data.map((item, index) => (
                <div data-aos="zoom-in-left" data-aos-delay={index * 300} key={index} className={styles.point}>
                    <div className={styles.cirlceImg}>
                        <img className="img-fit" src={`${process.env.REACT_APP_BASE_URL}${item.imgUrl}`} alt="" />
                    </div>
                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay={index * 300} className={styles.cirlceTxtBg} src={txtBg} alt="" />
                    <div data-aos="flip-right" data-aos-duration="800" data-aos-delay={index * 300} className={styles.title}>{item.title}</div>
                </div>
            ))}
        </div>    
    )
}

CirclePoint.propTypes = {
    data: PropTypes.array.isRequired
}

function Banner(props) {
    const data = props.data
    return (
        <div style={{backgroundImage: `url(${bannerBg})`}} className={`bg-fit ${styles.banner}`}>
            <Title />
            <Cloud />
            <ChoosePhoto data={data} />
        </div>
    )
}

Banner.propTypes = {
    data: PropTypes.array.isRequired
}

function Zhangjiajie() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTravelData())
        AOS.init({
            duration : 800
        })
    }, [dispatch])

    const travelZhangjiajieData = useSelector(state => state.travelDate.travelZhangjiajie)
    if (travelZhangjiajieData.length === 0) return
    return (
        <div className={styles.zhangjiajie}>
            <Banner data={travelZhangjiajieData.photo} />
            <CirclePoint data={travelZhangjiajieData.circleImg} />
            <CirclePointBg />
            <BlackPoint data={travelZhangjiajieData.blackImg} bgColor="#4e6a808f" marginTopNum={-50} />
            <Footer txt="張家界之旅" bgColor="#222e36" />
        </div>
    )
}

export default Zhangjiajie