import React, { useState, useEffect } from "react"
import styles from './asia.module.sass'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { addAsiaCount, initAsiaCount } from './../../redux/travelSlice'
import {fetchTravelData} from '../../redux/travelSlice'

import AOS from 'aos'
import "aos/dist/aos.css"

import { EffectFade, EffectCreative } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/virtual'
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

function PhotoSwiper() {
    const dispatch = useDispatch()
    const clickAsiaCount = useSelector(state => state.travelDate.asiaCount)
    const travelAsiaDate = useSelector(state => state.travelDate.travelAsiaData)

    useEffect(() => {
        dispatch(fetchTravelData())
        dispatch(initAsiaCount())
    }, [dispatch])

    const [swiper1, setSwiper1] = useState(null)
    const [swiper2, setSwiper2] = useState(null)
    const [isChangeOver, setChangeSlideOver] = useState(false)
    const slideTo = () => {
        if(swiper1 && swiper2 && !isChangeOver) {
            swiper1.slideNext()
            swiper2.slideNext()
            setChangeSlideOver(true)
            dispatch(addAsiaCount())
            setTimeout(() => {
                setChangeSlideOver(false)
            }, 600)
        }
    }

    return (
        <div className={styles.photoSwiper}>
            <Swiper
                onSwiper={setSwiper1}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                speed={600}
                loop={true}
                modules={[EffectCreative]}
                className={`swiper-no-swiping ${styles.swiperBg}`}
            >
                {travelAsiaDate.map((val, index) => (
                    <SwiperSlide key={index} style={{backgroundImage: `url(${val.imgUrl}`}} className={styles.swiperSlide}></SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setSwiper2}
                speed={600}
                effect={"fade"}
                fadeEffect={
                    {crossFade: true}
                }
                loop={true}
                modules={[EffectFade, EffectCreative]}
                className={`swiper-no-swiping ${styles.swiperTxt}`}
            >
                {travelAsiaDate.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.txt}>
                            {item.txt.map((txt, index) =>(<p data-aos="fade-up" data-aos-delay="800" key={index}>{txt}</p>))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.nextBtn} onClick={() => slideTo()}>
                {travelAsiaDate.map((item, index) => (
                    <img src={item.nextImgUrl} key={index} className={clsx(styles.btnImg, (clickAsiaCount === index && styles.showBtn))} alt="" />
                ))}
                <div className={styles.nextIcon}></div>
            </div>
        </div>
    )
}

function Banner() {
    return (
        <div className={styles.banner}>
            <PhotoSwiper />
        </div>
    )
}

function Asia() {
    const clickAsiaCount = useSelector(state => state.travelDate.asiaCount)
    useEffect(() => {
        AOS.init({
            duration : 800
        })
    })

    return (
        <div className={styles.asiaBg}>
            <div className={clsx(styles.colorBg, styles[`colorBg${clickAsiaCount}`])}></div>
            <h1 data-aos="fade-right" className={clsx(styles.title, styles[`titleColor0${clickAsiaCount}`])}>Asia</h1>
            <Banner />
        </div>
    )
}

export default Asia