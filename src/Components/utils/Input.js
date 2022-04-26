
const styles = {
    mainContainer: {
        display: 'flex',
		flexDirection: 'column',
        marginBottom: '8px'
    },
    label: {
        fontSize: '18px',
        marginBottom: '2px'
    },
    input: {
        height: '40px',
        padding: '4px 8px',
        background: '#eaf6f6',
        color: '#f76b8a',
        border: 'none',
        borderRadius: '4px'
    }
}

function Input(props){
    const {label,type,placeholder,name} = props
   
    return(
        <div style={styles.mainContainer}>
            <label style={styles.label}>{label}</label>
            <input type={type || "text"} name={name || ''} placeholder={placeholder || ''} style={styles.input} />
        </div>
    )
}
export default Input