import styles from './me.module.sass'
import '../../../style/main.sass'
import Dot from '../../dot/Dot'

import vivi from '../../../assets/image/about/vivi.jpg'

function Introduce(props) {
  return(
    <div className={styles.person}>
      <div data-aos="fade-down-left" data-aos-delay="400" className={styles.photo}>
        <img src={vivi} className="img-fit"  alt="" />
      </div>
      <div data-aos="fade-down-left" className={styles.photoFrame}></div>
      <div data-aos="fade-left" data-aos-delay="1000" className={styles.text}>
          <div className={styles.shadowText}>
            <div className={styles.shadow}>{props.title}</div>
            <div className={styles.text2}>{props.title}</div>
          </div>
          <div className={styles.introduce}>
            <Dot />
            <p className={styles.txt}>{props.content}</p>
          </div>
      </div>  
    </div>
  )
}

function Me() {
  const introduceTxt = {
    title: 'Vivi.',
    content: '喜歡漂亮網站，原本是懷抱設計夢的孩子，結果誤打誤撞進入了資訊科系，接觸到了 code 而開啟了前端人生。'
  }

  return (
      <div className={styles.meBg}>
        <Introduce title={introduceTxt.title} content={introduceTxt.content} />
      </div>
  );
}

export default Me;
