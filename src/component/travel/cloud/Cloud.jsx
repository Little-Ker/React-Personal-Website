import styles from './cloud.module.sass'
import cloud from '../../../assets/image/zhangjiajie/cloud.png'
import clsx from 'clsx'

const posStyle = (top) => {
    return {
        top: `${top}px`,
    }
}

function Cloud() {
    const posList = [{
        top: 0,
        anim: "cloudAnim01"
    },{
        top: -600,
        anim: "cloudAnim02"
    }]

    return (
        <div>
            {posList.map((item, index) => (
                <div key={index} style={posStyle(item.top)} className={clsx(styles.cloud, styles[`${item.anim}`])}>
                    <img src={cloud} alt="圖片" />
                </div>
            ))}
        </div>
    )
}

export default Cloud