import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Producto from './Producto.js'
import Loading from '../utils/Loading'
import { getAllProductos } from "../../Services/productosServices"

const styles = {
	componentStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	searchBarContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '40px',
		width: '300px',
		background: '#eaf6f6',
		borderRadius: '4px',
		padding: '4px 12px',
		marginBottom: '12px'
	},
	searchBarText: {
		border: 'none',
		color: '#f76b8a',
		background: '#eaf6f6',
	},
	searchBarButton: {
		background: 'transparent',
		border: 'none',
		color: '#66bfbf'
	},
	resultadosContainer: {
		background: '#eaf6f6',
		borderRadius: '4px',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: '70%',
		minWidth: '300px',
		padding: '20px 25px'
	},
	masResultados: {
		fontSize: '18px',
		marginTop: '8px'
	},
	link: {
		textDecoration: 'none',
		color: '#f76b8a'
	}
}

function Listado(props) {
	const { preview } = props
	const [listadoProductos, setListadoProductos] = useState([])
	const [response, setResponse] = useState({})
	const [loading, setLoading] = useState(true)
	const [buscar, setBuscar] = useState('lavarropas')
	const { register, handleSubmit } = useForm()
    const onSubmit=(data)=>{
        setBuscar(data.producto)
    }

	useEffect(
		() => {
			const request = async () => {

				try {
					setLoading(true)
					const response = await getAllProductos(buscar)
					setListadoProductos(response.data.results)
					setResponse(response.data)
					setLoading(false)
				} catch (e) {
					console.log(e)
					setLoading(false)
				}

			}
			request()
		},
		[buscar]
	)

	if (loading) {
		return (
			<div>
				<Loading/>
			</div>
		)

	} else {
		if (preview) {
			return (
				<div style={styles.componentStyle}>
					<form onSubmit={handleSubmit(onSubmit)} style={styles.searchBarContainer}>
						<input type="text" placeholder="¿Que estas buscando?" {...register("producto")} style={styles.searchBarText}/>
						<button type="submit" style={styles.searchBarButton}>Buscar</button>
            		</form>
					<div style={styles.resultadosContainer}>
						{listadoProductos.slice(0, 4).map(listadoProducto => <Producto nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail} link={listadoProducto.permalink} />)}
					</div>
					<h2 style={styles.masResultados}>¿Queres ver todos los resultados? <Link to='/ingresar' style={styles.link}>Inicia Sesión</Link></h2>
				</div>
			)
		} else {
			return (
				<div style={styles.componentStyle}>
					<h2>Todos los resultados</h2>
					<div style={styles.resultadosContainer}>
						{listadoProductos.map(listadoProducto => <Producto nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail} />)}
					</div>
				</div>
			)
		}
	}

}

export default Listado