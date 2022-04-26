const notFoundImage = require('../assets/img/404.png')

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100vw',
        marginTop: '10%'
	},
	image: {
		height: '350px',
		width: '400px',
        objectFit: 'contain',
	},
	text: {
		color: '#db63a2',
		fontSize: '18px',
		fontWeight: 'bold'
	}
}

function NotFound(){
    return(
        <div style={styles.mainContainer}>
            <img src={notFoundImage} alt="not found" style={styles.image}/>
            <p style={styles.text}>404 Not Found</p>
        </div>
    )
}

export default NotFound