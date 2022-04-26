import Listado from '../Components/productos/Listado'

const styles = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		background: '#fcfefe',
		paddingTop: '40px'
	}
}

function Home() {
	return (
		<div style={styles.main}>
			<Listado preview={true}/>
		</div>
	)
}

export default Home