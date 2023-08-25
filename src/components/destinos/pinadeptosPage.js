import {useState, useEffect} from "react";
import axios from 'axios';
import DeptoItem from './DeptoItem';



const PinadeptosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [pinadeptos, setPinadeptos] = useState([]);

    useEffect(() => {
        const cargarPinadeptos = async () => {
            setLoading(true);
            //const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades'); M6U4
            const response = await axios.get('http://localhost:3000/api/pinadeptos');
            setPinadeptos(response.data);
            setLoading(false);
        };

        cargarPinadeptos();
    }, []);
    return (
        <section className="holder">
            <div className="container">
            <h1>Alojamientos en Pinamar</h1>
            {
                loading ? (
                    <p> Cargando... </p>
                ) : (
                    pinadeptos.map(item => <DeptoItem key={item.id}
                        title={item.titulo} 
                        imagen={item.imagen} body={item.cuerpo} />)

                )
            }
            </div>
        </section>
    )
};




export default PinadeptosPage;