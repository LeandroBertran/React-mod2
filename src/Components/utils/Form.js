import Input from './Input'

const styles = {
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '310px',
		padding: '24px 16px',
		border: 'solid 2px #f76b8a',
		background: '#66bfbf',
		color: '#fcfefe',
		borderRadius: '4px'
	},
	title: {
		alignSelf: 'center',
		marginBottom: '24px'
	},
	button: {
		marginTop: '16px',
		width: '50%',
		height: '40px',
		alignSelf: 'center',
		background: '#f76b8a',
		color: '#fcfefe',
		border: 'solid 1px #fcfefe',
		borderRadius: '4px'
	}
}

function Form(props) {
	const { title, inputs, button } = props


	return (
		<form style={styles.formContainer}>
			<h3 style={styles.title}>{title}</h3>

			{inputs.map(input => {
				return (
					<>
						<Input {...input}></Input>
					</>
				)
			})}

			<button style={styles.button}>{button.text}</button>
		</form>
	)
}

export default Form