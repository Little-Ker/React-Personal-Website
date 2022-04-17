import { Link, useLocation  } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from './nav.module.sass'

const Avatar = (prop) => {
  return (
    <div className={styles.avatar}>
      {/* <div className={styles.photo}></div> */}
      <div className={styles.name}>{prop.name}</div>
    </div>
  );
}

const NavList = () => {
  const linkList = [
    {
      title: 'About', to:'123'
    },
    {
      title: 'Travel', to:'123'
    },
    {
      title: 'Work', to:'123'
    },
    {
      title: 'Goal', to:'123'
    },
    {
      title: 'TodoTest', to:'test'
    },
  ]

  return (
    <div className={styles.list}>
      <ul>
          {linkList.map((link, index) => (
            <Link key={index} className={styles.link} to={link.to} >{link.title}</Link>
          ))}
      </ul>
    </div>
  );
}

export default function Nav(prop) {
  return (
    <div className={styles.nav}>
      <Avatar name={prop.name} />
      <NavList />
    </div>
  )
}

Nav.propTypes = {
  name: PropTypes.string
};