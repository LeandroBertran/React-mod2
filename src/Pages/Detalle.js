import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../Services/productosServices"
import Loading from '../Components/utils/Loading'

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%'
    },
    compraContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0'
    },
    botonCompra: {
        padding: '4px',
        background: '#f76b8a',
        border: 'solid 2px transparent',
        borderRadius: '4px',
        color: '#fcfefe'
    },
    price: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '5px 10px'
    },
    imageContainer: {
        display: 'flex',		
        flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: '70%',
		minWidth: '300px',
        padding: '20px 15px',
        background: '#eaf6f6',
		borderRadius: '4px'
    },
    productInfo: {
        fontSize: '40px',
        color: '#f76b8a'
    },
    img: {
        height: '250px',
        width: '30%',
		minWidth: '280px',
        objectFit: 'contain',
        border: 'solid 2px #f76b8a',
        borderRadius: '4px',
        margin: '10px 10px',
        background: '#fcfefe',
    }
}

function Detalle(){
    const {id} = useParams()
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id)
                    setProducto(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [id]
    )
    if(loading){
        return(
            <div>
				<Loading/>
            </div>
        )
    }else{
        return(
            <div style={styles.mainContainer}>
                <p style={styles.productInfo}>{producto.title}</p>
                <div style={styles.compraContainer}>
                    <p style={styles.price}>$ {producto.price}</p>
                    <a href={producto.permalink} target='_blank'><button style={styles.botonCompra}>Comprar</button></a>
                </div>
                <div style={styles.imageContainer}>
                    {producto.pictures.slice(0,3).map(picture=><img src={picture.url} style={styles.img}/>)}
                </div>
            </div>
        )
    }
    
}

export default Detalle