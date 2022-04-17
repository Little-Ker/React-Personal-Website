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
      title: 'About', link:'123'
    },
    {
      title: 'Travel', link:'123'
    },
    {
      title: 'Work', link:'123'
    },
    {
      title: 'Goal', link:'123'
    },
  ]

  return (
    <div className={styles.list}>
      <ul>
          {linkList.map((link, index) => (
            <li className={styles.link} key={index}>
              {link.title}
            </li>
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