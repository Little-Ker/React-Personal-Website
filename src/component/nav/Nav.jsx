import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import styles from './nav.module.sass'
import clsx from 'clsx'
import { Link, useLocation  } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeClickBool, initClickBool } from './../../redux/controlSlice'

const Avatar = (prop) => {
  return (
    <div className={styles.avatar}>
      {/* <div className={styles.photo}></div> */}
      <div className={styles.name}>{prop.name}</div>
    </div>
  )
}

const NavList = () => {
  const dispatch = useDispatch()
  const linkList = [
    { title: 'About', to:'about' },
    { title: 'Travel', to:'travel' },
    { title: 'Work', to:'work' },
    { title: 'Goal', to:'goal' }
  ]

  let location = useLocation().pathname.split('/')[1]
  if(location === '' || location === 'React-Personal-Website') location = 'about'

  const moveTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.list}>
      <ul>
          {linkList.map((link, index) => (
            <Link key={index}
             className={clsx(styles.link,location === link.to && styles.active)}
             to={link.to}
             onClick={() => {moveTop();dispatch(initClickBool())}}
            >{link.title}</Link>
          ))}
      </ul>
    </div>
  )
}

export default function Nav(prop) {
  const clickBool = useSelector(state => state.controlData.clickBool)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initClickBool())
  }, [dispatch])

  useEffect(() => {
    const body = document.querySelector("body")
    const showType = (clickBool) ? "hidden" : "auto"
    body.style.overflow = showType
  }, [clickBool])

  return (
    <div className={styles.nav}>
      <div onClick={() => dispatch(changeClickBool(!clickBool))} className={clsx(styles.navBtn, clickBool && styles.active)}>
        <div className={styles.line}></div>
      </div>
      <div onClick={() => dispatch(changeClickBool(false))} className={clsx(styles.blackHide, clickBool && styles.active)}></div>
      <div className={clsx(styles.navContent, clickBool && styles.active)}>
        <Avatar name={prop.name} />
        <NavList />
      </div>
    </div>
  )
}

Nav.propTypes = {
  name: PropTypes.string.isRequired
}