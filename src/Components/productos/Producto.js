import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

const styles = {
	productoContainer: {
		background: '#fcfefe',
		border: 'solid 2px #f76b8a',
		width: '22%',
		minWidth: '280px',
		maxHeight: '325px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px 5px',
		padding: '5px',
		borderRadius: '4px'
	},
	botonCompra: {
        padding: '4px',
        background: '#f76b8a',
        border: 'solid 2px transparent',
        borderRadius: '4px',
        color: '#fcfefe',
		marginBottom: '5px'
    },
	productoInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		fontSize: '14px',
		width: '80%',
		height: '150px',
		padding: '10px',
	},
	img: {
		width: '100px'
	},
	price: {
		fontWeight: 'bold',
		fontSize: '16px',
	},
	detalle: {
		textDecoration: 'none',
		fontSize: '14px',
		color: '#66bfbf'
	}
}

function Producto(props) {
	const { nombre, precio, descripcion, children, id, thumbnail, link } = props

	return (
		<>
			<div style={styles.productoContainer}>
				<img src={thumbnail} style={styles.img}></img>
				<div style={styles.productoInfo}>
					<p>{nombre}</p>
					<p style={styles.price}>$ {precio}</p>
					<p>{descripcion || ''}</p>

					{children}
				</div>
				<a href={link} target='_blank'><button style={styles.botonCompra}>Comprar</button></a>
				<Link to={'/producto/' + id} style={styles.detalle}>Ver Detalle</Link>
			</div>
		</>
	)
}
export default Producto