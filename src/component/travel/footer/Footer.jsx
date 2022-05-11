import React from "react"
import styles from './fooer.module.sass'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <div style={{backgroundColor: props.bgColor}} className={styles.footer}>
            <p>{props.txt}</p>
        </div>  
    )
}

export default Footer

Footer.propTypes = {
    bgColor: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
}