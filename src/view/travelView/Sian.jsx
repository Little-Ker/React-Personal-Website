import React, { useEffect } from "react"
import styles from './sian.module.sass'
import '../../style/main.sass'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTravelData} from '../../redux/travelSlice'

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
    return (
        <div className={`${styles.point}`}>
            <div data-aos-anchor-placement="top-center" data-aos="fade-right" className={styles.bannerPos}>
                <ChooseBanner setBannerId='banner01' pointList={props.data.imgList} btnPosRight={true}  />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" className={styles.txt}>
                <h1 data-aos="flip-left" data-aos-delay="600" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center">{props.data.title}</h1>
                <p>{props.data.txt}</p>
            </div>
        </div>
    )
}

function RightPoint(props) {
    return (
        <div className={`${styles.point} ${styles.rightPoint}`}>
            <div data-aos-anchor-placement="top-center" data-aos="fade-right"  className={`${styles.txt} ${styles.rightTxt}`}>
                <h1 data-aos="flip-right" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">{props.data.title}</h1>
                <p>{props.data.txt}</p> 
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" className={`${styles.bannerPos} ${styles.bannerRightPos}`}>
                <ChooseBanner setBannerId='banner02' pointList={props.data.imgList} btnPosRight={false} className={styles.bannerPos} />
            </div>
        </div>
    )
}

function PointList(props) {
    return (
        <div style={{backgroundImage: `url(${props.bg})`}} className="bg-fit">
            <div className={`container960 ${styles.pointList}`}>
                {props.data.map((item ,index) => (
                    <div data-aos="zoom-in-left" data-aos-delay={index * 300} key={index} className={styles.item}>
                        <ImgRotate item={item} />
                        <p data-aos="flip-right" data-aos-duration="800" data-aos-delay={index * 300 + 800} className={styles.imgTxt}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function BlackPoint(props) {
    function fadePos(index) {
        if(index % 2 === 1) return "fade-left"
        return "fade-right"
    }

    return (
        <div className={styles.blackPoint}>
            {props.data.map((item, index) => (
                <div data-aos={fadePos(index)} key={index} style={{backgroundImage: `url(${item.imgUrl})`}} className={`bg-fit ${styles.item}`}>
                    <div className={styles.blackHide}>
                        <p data-aos="flip-left" data-aos-delay="600">{item.title}</p>
                    </div>
                </div>
            ))}
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
            <BlackPoint data={travelSianData.park} />
            <PointList data={travelSianData.eat} bg={bg03} />
            <Footer data={travelSianData.introduce} />
        </div>
    )
}

export default Sian