import { Link, useLocation  } from "react-router-dom";
import PropTypes from 'prop-types'
import styles from './nav.module.sass'
import clsx from 'clsx'

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
    { title: 'About', to:'about' },
    { title: 'Travel', to:'travel' },
    { title: 'Work', to:'work' },
    { title: 'Goal', to:'goal' },
    { title: 'TodoTest', to:'test' },
  ]

  const location = useLocation()

  return (
    <div className={styles.list}>
      <ul>
          {linkList.map((link, index) => (
            <Link key={index}
             className={clsx(styles.link,location.pathname === `/${link.to}` && styles.active)}
             to={link.to}
            >{link.title}</Link>
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