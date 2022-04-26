import Form from '../Components/utils/Form'

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: '5%'
	}
}

function Registro(){
    const registerInputs = [
		{ label: 'Nombre de usuario', type: 'text', placeholder: 'Ingresa tu nombre de usuario', name: 'usuario' },
		{ label: 'Constraseña', type: 'password', placeholder: 'Ingresa contraseña', name: 'contraseña' },
		{ label: 'Constraseña', type: 'password', placeholder: 'Repetí tu contraseña', name: 'confirmarContraseña' },
	]
    return(
        <div style={styles.mainContainer}>
			<Form title="Unite a Mercado Liebre!" inputs={registerInputs} button={{text: 'Registrar'}}></Form>
		</div>
    )
}

export default Registro