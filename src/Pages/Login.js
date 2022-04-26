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

function Login(){
    const loginInputs = [
		{ label: 'Nombre de usuario', type: 'text', placeholder: 'Ingresa tu nombre de usuario', name: 'usuario' },
		{ label: 'Constraseña', type: 'password', placeholder: 'Ingresa contraseña', name: 'contraseña' },
	]

    return(
        <div style={styles.mainContainer}>
			<Form title="Iniciar sesión" inputs={loginInputs} button={{text: 'Ingresar'}}></Form>
		</div>
    )
}

export default Login