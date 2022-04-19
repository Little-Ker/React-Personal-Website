import styles from './aboutView.module.sass'
import '../../style/main.sass'

import Me from '../../component/about/me/Me'
import TimelineTest from '../../component/timelineTest/TimelineTest'
// import Live from '../../component/about/live/Live'

function BgCircle() {
    return (
      <div>
          <div className={styles.circleY}></div>
          <div className={styles.circleP}></div>
          <div className={styles.circleO}></div>
      </div>
    )
}


function aboutView() {
    return (
        <div className={styles.bg}>
            <BgCircle />
            <div className='container1280' >
                <Me />
                <TimelineTest />
                {/* <Live /> */}
            </div>
        </div>
    )
}
export default aboutView;