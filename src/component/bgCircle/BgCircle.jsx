import React from "react"
import styles from './bgCircle.module.sass'

function BgCircle() {
    return (
      <div className={styles.bgCircle}>
          <div className={styles.circleY}></div>
          <div className={styles.circleP}></div>
          <div className={styles.circleO}></div>
      </div>
    )
}

export default BgCircle