import React,{useState} from "react"
import { Link } from "react-router-dom"

const bunnyLogo = require('../../assets/img/bunny-logo.png')

const styles = {
	headerStyle: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '70px',
		backgroundColor: '#66bfbf'
	},
	brand: {
		container: {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			margin: '0 5px'
		},
		text: {
			fontSize: '20px',
			fontWeight: 'bold',
			color: '#eaf6f6',
			textShadow: '1px 1px 2px #f76b8a',
			margin: '0 0 0 5px',
		}
	},
	navOptionsContainer: {
		height: '100%',
		margin: '0',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		listStyleType: 'none',
	},
	navOption: {
		textDecoration: 'none',
		color: '#f76b8a',
		border: 'solid 1px transparent',
		backgroundColor: '#eaf6f6',
		borderRadius: '4px',
		margin: '0 8px',
		padding: '8px'
	}
}


function Header() {
	const [options, setOptions] = useState([{name: 'Home', route: '/'}, {name: 'Registro', route: '/alta'}, {name: 'Ingresar', route: '/ingresar'}])

	return (
		<div style={styles.headerStyle}>
			<div style={styles.brand.container}>
				<img src={bunnyLogo} alt="" height='50px'/>
				<p style={styles.brand.text}>Mercado Liebre</p>
			</div>
			<ul style={styles.navOptionsContainer}>
				{options.map(option => <li><Link to={option.route} style={styles.navOption}>{option.name}</Link></li>)}
			</ul>
		</div>
	)
}

export default Header