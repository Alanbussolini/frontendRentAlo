import {useState, useEffect} from "react";
import axios from 'axios';
import DeptoItem from './DeptoItem';



const SantadeptosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [santadeptos, setSantadeptos] = useState([]);

    useEffect(() => {
        const cargarSantadeptos = async () => {
            setLoading(true);
            //const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades'); M6U4
            const response = await axios.get('http://localhost:3000/api/santadeptos');
            setSantadeptos(response.data);
            setLoading(false);
        };

        cargarSantadeptos();
    }, []);
    return (
        <section className="holder">
            <div className="container">
            <h1>Alojamientos en Santa Teresita</h1>
            {
                loading ? (
                    <p> Cargando... </p>
                ) : (
                    santadeptos.map(item => <DeptoItem key={item.id}
                        title={item.titulo} 
                        imagen={item.imagen} body={item.cuerpo} />)

                )
            }
            </div>
        </section>
    )
};




export default SantadeptosPage;