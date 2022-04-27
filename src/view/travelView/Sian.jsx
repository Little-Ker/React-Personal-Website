import React, { useEffect } from "react"
import styles from './sian.module.sass'
import '../../style/main.sass'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTravelData} from '../../redux/travelSlice'

import AOS from 'aos'
import "aos/dist/aos.css"

import ImgRotate from '../../component/travel/imgRotate/ImgRotate'
import ChooseBanner from "../../component/travel/chooseBanner/ChooseBanner"

function Title() {
    return (
        <div className={styles.title}>
            <p className={styles.txt01}>海旅會研學之旅</p>
            <p className={styles.txt02}>西</p>
            <p className={styles.txt03}>安</p>
        </div>
    )
}

function LeftPoint(props) {
    return (
        <div className={`${styles.point}`}>
            <div className={styles.bannerPos}>
                <ChooseBanner setBannerId='banner01' pointList={props.data.imgList} btnPosRight={true}  />
            </div>
            <div className={styles.txt}>
                <h1>{props.data.title}</h1>
                <p>{props.data.txt}</p>
            </div>
        </div>
    )
}

function RightPoint(props) {
    return (
        <div className={`${styles.point} ${styles.rightPoint}`}>
            <div className={`${styles.txt} ${styles.rightTxt}`}>
                <h1>{props.data.title}</h1>
                <p>{props.data.txt}</p> 
            </div>
            <div className={`${styles.bannerPos} ${styles.bannerRightPos}`}>
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
                    <div key={index} className={styles.item}>
                        <ImgRotate item={item} />
                        <p className={styles.imgTxt}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function BlackPoint(props) {
    return (
        <div className={styles.blackPoint}>
            {props.data.map((item, index) => (
                <div key={index} style={{backgroundImage: `url(${item.imgUrl})`}} className={`bg-fit ${styles.item}`}>
                    <div className={styles.blackHide}>
                        <p>{item.title}</p>
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
        <div style={{backgroundImage: `url(${travelSianData.introduce.bg02})`}} className={styles.sian}>
            <div style={{backgroundImage: `url(${travelSianData.introduce.bg01})`}} className={styles.content}>
                <Title />
                <LeftPoint data={travelSianData.terracottaArm} />
            </div>  
            <RightPoint data={travelSianData.hotSpring} />
            <BlackPoint data={travelSianData.park} />
            <PointList data={travelSianData.eat} bg={travelSianData.introduce.bg03} />
            <Footer data={travelSianData.introduce} />
        </div>
    )
}

export default Sian