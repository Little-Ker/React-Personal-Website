import React, { useState } from "react"
import styles from './environment.module.sass'
import '../../../style/main.sass'
import clsx from 'clsx'
import Button from '@mui/material/Button';

import { Mousewheel, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/virtual'
import "swiper/css/pagination"
import "swiper/css/navigation"

function Environment() {
    return(
        <div className={styles.environment}>
            <PhotoSwiper />
        </div>
    )
}

function PhotoSwiper() {
    const swiperAry = ['台中神岡', '潭雅神綠園道', '香水百合']

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
                className={styles.swiper}
            >
                {swiperAry.map((val, index) => (
                <SwiperSlide key={index}>
                    <img className="img-fit" src={`https://picsum.photos/800?random=${index}`}></img>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.btnList}>
                {swiperAry.map((val, index) => (
                    <Button key={index} variant="outlined" className={clsx(styles.btn, selected === index && styles.active)} onClick={() => {slideTo(index);setSelected(index)}}>{val}</Button>
                ))}
            </div>
        </div>
    )
}

export default Environment