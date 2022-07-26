import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {React, useEffect} from 'react'
import {fetchTravelData} from '../../redux/travelSlice'
import styles from './travelView.module.sass'
import AddIcon from '@mui/icons-material/Add'

// "banner": [
//     {"title": "亞洲大學", "to": "/travel/asia", "imgUrl": "/img/travel/banner01.jpg", "startDate": "2015 - 09", "overDate": "2019 - 06"},
//     {"title": "西安研學之旅", "to": "/travel/sian", "imgUrl": "/img/travel/banner02.jpg", "startDate": "2018 - 04 - 30", "overDate": "2018 - 05 - 04"},
//     {"title": "寧夏研學之旅", "to": "/travel/ningxia", "imgUrl": "/img/travel/banner03.jpg", "startDate": "2019 - 05 - 11", "overDate": "2019 - 05 - 18"},
//     {"title": "張家界", "to": "/travel/zhangjiajie", "imgUrl": "/img/travel/banner04.jpg", "startDate": "2019 - 07 - 21", "overDate": "2019 - 07 - 21"}
// ],

function ShowFontFamily() {
    return (
        <div className={styles.showFontFamily}>
            <p style={{fontFamily: "f01"}}>Test</p>
            <p style={{fontFamily: "f02"}}>Test</p>
        </div>
    )
    
}

function TravelView() {
    const dispatch = useDispatch()
    const travelBannerDate = useSelector(state => state.travelDate.travelBannerData) // <-- 拿取資料
    useEffect(() => {
        dispatch(fetchTravelData())
    }, [dispatch])

    function fadePos(index) {
        const pageWidth  = document.documentElement.scrollWidth
        if (pageWidth <= 576) {
            if(index % 2 === 1) return "fade-left"
            return "fade-right"
        }
        if(index % 2 === 1) return "fade-up"
        return "fade-down"
    }

    return (
        <div className={styles.bg}>
            <ShowFontFamily />
            <div className={styles.travelList}>
                {travelBannerDate.map((item, index) => (
                    <Link data-aos={fadePos(index)} data-aos-duration="1200" key={index} to={item.to} className={styles.point}>
                        <img className="img-fit" alt={item.title} src={`${process.env.REACT_APP_BASE_URL}${item.imgUrl}`}></img>
                        <div className={styles.blackHide}>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1200" data-aos-duration="800" className={styles.title}>{item.title}</div>
                            <div className={styles.txtBox}>
                                <p data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-delay="1200" data-aos-duration="800" className={styles.date}>
                                    {item.startDate}
                                    <br></br>
                                    {item.overDate}
                                </p>
                            </div>
                        </div>
                        <div className={styles.search}>
                            <AddIcon className={styles.iconSize} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TravelView