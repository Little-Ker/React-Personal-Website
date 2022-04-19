import React, { useState } from 'react'
import { Mousewheel, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react'
import styles from './swiperTest.module.sass'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'
import "swiper/css/pagination"
import "swiper/css/navigation"
 
const SwiperButtonNext = () => {
  const swiper = useSwiper()
  return (<button onClick={() => {swiper.slideNext()}}>Next</button>)
}
 
const SwiperTest = () => {
    const swiperAry = [1, 2, 3, 4, 5]

    const [swiper, setSwiper] = useState(null)

    const slideTo = (index) => {
        if(swiper) swiper.slideTo(index)
    }

    return (
        <div className={styles.photoSwiper}>
            <Swiper
                onSwiper={setSwiper}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                // slidesPerGroup={3}
                loop={true}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Mousewheel, Pagination, Navigation]}
                className={styles.swiper}
            >
                {swiperAry.map((val, index) => (
                <SwiperSlide key={index}>Slide {val}</SwiperSlide>
                ))}
                <SwiperButtonNext />
            </Swiper>
            <div>
                <div onClick={() => slideTo(0)}>000</div>
                <div onClick={() => slideTo(1)}>111</div>
                <div onClick={() => slideTo(2)}>222</div>
            </div>
        </div>
    )
}
 
export default SwiperTest