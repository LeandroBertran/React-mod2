const loadingGIF = require('../../assets/img/loading.gif')
const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100vw',
	},
	image: {
		height: '250px',
		width: '300px'
	},
	text: {
		color: '#db63a2',
		fontSize: '18px',
		fontWeight: 'bold'
	}
}

function Loading() {
	return (
		<div style={styles.mainContainer}>
			<img src={loadingGIF} alt="loading" style={styles.image}/>
			<p style={styles.text}>Cargando...</p>
		</div>
	)
}
export default Loading