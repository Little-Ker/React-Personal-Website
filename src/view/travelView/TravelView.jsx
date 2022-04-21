import { useSelector, useDispatch } from "react-redux"
import { Link  } from "react-router-dom";
import {React, useEffect} from 'react'
import {fetchTravelData} from '../../redux/travelSlice'
import styles from './travelView.module.sass'
import AddIcon from '@mui/icons-material/Add'

function TravelView() {
    const dispatch = useDispatch()
    const travelBannerDate = useSelector(state => state.travelDate.travelBannerData) // <-- 拿取資料

    useEffect(() => {
        dispatch(fetchTravelData())
    }, [dispatch])

    return (
        <div className={styles.bg}>
            <div className={styles.travelList}>
                {travelBannerDate.map((item, index) => (
                    <Link key={index} to={item.to} className={styles.point}>
                        <img className="img-fit" alt={item.title} src={item.imgUrl}></img>
                        <div className={styles.blackHide}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.txtBox}>
                                <p className={styles.date}>
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

export default TravelView;