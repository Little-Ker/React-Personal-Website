import styles from './imgRotate.module.sass'

function ImgRotate(props) {
    return (
        <div className={styles.flip}>
            <div style={{backgroundImage: `url(${props.item.imgUrl})`}} className={styles.imgCircle}></div>
            <div style={{backgroundImage: `url(${props.item.imgUrlHover})`}} className={`${styles.imgCircle} ${styles.back}`}></div>
        </div>
    )
}

export default ImgRotate;