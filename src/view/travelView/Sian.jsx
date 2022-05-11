import React, { useEffect } from "react"
import styles from './sian.module.sass'
import '../../style/main.sass'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTravelData } from '../../redux/travelSlice'
import PropTypes from 'prop-types'

import AOS from 'aos'
import "aos/dist/aos.css"

import bg01 from '../../assets/image/sian/bg01.jpg'
import bg02 from '../../assets/image/sian/bg02.jpg'
import bg03 from '../../assets/image/sian/bg03.jpg'
import bird from '../../assets/image/sian/bird.png'
import tree from '../../assets/image/sian/tree.png'
import tree02 from '../../assets/image/sian/tree02.png'

import ImgRotate from '../../component/travel/imgRotate/ImgRotate'
import ChooseBanner from "../../component/travel/chooseBanner/ChooseBanner"
import BlackPoint from "../../component/travel/blackPoint/BlackPoint"
import Footer from "../../component/travel/footer/Footer"

function Title() {
    return (
        <div className={styles.title}>
            <p data-aos="fade-down" className={styles.txt01}>海旅會研學之旅</p>
            <p data-aos="zoom-out-left" data-aos-delay="200" className={styles.txt02}>西</p>
            <p data-aos="zoom-out-right" data-aos-delay="400" className={styles.txt03}>安</p>
        </div>
    )
}

function LeftPoint(props) {
    const data = props.data
    return (
        <div className={`${styles.point}`}>
            <div data-aos-anchor-placement="top-center" data-aos="fade-right" className={styles.bannerPos}>
                <ChooseBanner setBannerId='banner01' pointList={data.imgList} btnPosRight={true}  />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" className={styles.txtContent}>
                <h1 data-aos="flip-left" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center">{data.title}</h1>
                {data.txt.map((txt, index) => (
                    <p className={styles.txt} key={index}>{txt}</p>
                ))}
            </div>
        </div>
    )
}

LeftPoint.propTypes = {
    data: PropTypes.object.isRequired
}

function RightPoint(props) {
    const data = props.data
    return (
        <div className={`${styles.point} ${styles.rightPoint}`}>
            <div data-aos-anchor-placement="top-center" data-aos="fade-right"  className={`${styles.txtContent} ${styles.rightTxt}`}>
                <h1 data-aos="flip-right" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">{data.title}</h1>
                {data.txt.map((txt, index) => (
                    <p className={styles.txt} key={index}>{txt}</p>
                ))}
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" className={`${styles.bannerPos} ${styles.bannerRightPos}`}>
                <ChooseBanner setBannerId='banner02' pointList={data.imgList} btnPosRight={false} className={styles.bannerPos} />
            </div>
        </div>
    )
}

RightPoint.propTypes = {
    data: PropTypes.object.isRequired
}

function PointList(props) {
    const { bg, data } = props
    return (
        <div style={{backgroundImage: `url(${bg})`}} className="bg-fit">
            <div className={`container960 ${styles.pointList}`}>
                {data.map((item ,index) => (
                    <div id={`circleId${index}`} data-aos="zoom-in-left" data-aos-delay={index * 300} key={index} className={styles.item}>
                        <ImgRotate item={item} />
                        <p data-aos="flip-right" data-aos-anchor={`circleId${index}`} data-aos-duration="800" data-aos-delay={index * 300 + 800} className={styles.imgTxt}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

PointList.propTypes = {
    bg: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

function Bg() {
    return (
        <div>
            <img src={bird} className={styles.bird} alt="" />
            <div className={styles.tree}>
                <img data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000" src={tree} alt="" />
            </div>
            <div className={styles.tree2}>
                <img data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000" src={tree02} alt="" />
            </div>
        </div>
    )
}

function Sian() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTravelData())
        AOS.init({
            duration : 800
        })
    }, [dispatch])

    const travelSianData = useSelector(state => state.travelDate.travelSianData)

    if (travelSianData.length === 0) return
    return (
        <div style={{backgroundImage: `url(${bg02})`}} className={styles.sian}>
            <Bg />
            <div style={{backgroundImage: `url(${bg01})`}} className={styles.content}>
                <Title />
                <LeftPoint data={travelSianData.terracottaArm} />
            </div>  
            <RightPoint data={travelSianData.hotSpring} />
            <BlackPoint data={travelSianData.park} bgColor="#6f6f7e9f" marginTopNum={160} className={styles.blackPoint} />
            <PointList data={travelSianData.eat} bg={bg03} />
            <Footer txt={`華夏文明 薪火相傳 - ${travelSianData.introduce.title}研學之旅`} bgColor="#505057" />
        </div>
    )
}

export default Sian