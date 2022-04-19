import styles from './dot.module.sass'

function Dot() {
	return (
	  <div className={styles.dot}>
		<svg preserveAspectRatio="xMidYMid meet" data-bbox="8.8 9.7 81 81.3" xmlns="http://www.w3.org/2000/svg" viewBox="8.8 9.7 81 81.3" role="presentation" aria-hidden="true">
			<g>
				<path d="M8.8 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H8.8z"></path >
				<path d="M58 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H58z"></path >
			</g>
		</svg>
	  </div>
	)
}


export default Dot;