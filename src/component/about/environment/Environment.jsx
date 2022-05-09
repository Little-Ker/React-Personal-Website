import React, { useState } from "react"
import styles from './environment.module.sass'
import '../../../style/main.sass'
import clsx from 'clsx'
import Button from '@mui/material/Button'

import { Mousewheel, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/virtual'
import "swiper/css/pagination"
import "swiper/css/navigation"

import img01 from '../../../assets/image/about/01.jpg'
import img02 from '../../../assets/image/about/02.jpg'
import img03 from '../../../assets/image/about/03.jpg'

const swiperAry = [{
    title: '台中神岡',
    imgUrl: img01
},{
    title: '潭雅神綠園道',
    imgUrl: img02
},{
    title: '香水百合',
    imgUrl: img03
}]

function Environment() {
    return(
        <div className={styles.environment}>
            <PhotoSwiper />
        </div>
    )
}

function PhotoSwiper() {
    const [swiper, setSwiper] = useState(null)
    const [selected, setSelected] = useState(0)

    const slideTo = (index) => {
        if(swiper) swiper.slideTo(index)
    }

    return (
        <div className={styles.photoSwiper}>
            <Swiper
                onSwiper={setSwiper}
                direction={"vertical"}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                className={`swiper-no-swiping ${styles.swiper}`}
            >
                {swiperAry.map((val, index) => (
                <SwiperSlide key={index}>
                    <img className="img-fit" alt="" src={val.imgUrl}></img>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.btnList}>
                {swiperAry.map((val, index) => (
                    <Button key={index} variant="outlined" className={clsx(styles.btn, selected === index && styles.active)} onClick={() => {slideTo(index);setSelected(index)}}>{val.title}</Button>
                ))}
            </div>
        </div>
    )
}

export default Environment