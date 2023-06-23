
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from '../entidades/Contacto';
import { useEffect, useState } from 'react';
import { getAllContactos, getContactoXIndice } from '../accesorios/LlamadasBack';



const AgendaContacto: React.FC = () => {
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [contactosFiltrados, setContactosFiltrados] = useState<Contacto[]>([]);

    async function getContactos() {
        let datos: Contacto[] = await getAllContactos();
        setContactos(datos);
    }

    async function getcontactosFiltrados(indice: string) {
        let datos: Contacto[] = await getContactoXIndice(indice);
        setContactosFiltrados(datos);
    }

    useEffect(() => {
        getContactos();
        getcontactosFiltrados("a")
    }, []);


    return (
        <div className="HomeView">
            <h1>Agenda de Contactos</h1>
                <table >
                    <thead >
                        <tr >
                            <th className="grid-item-agenda">Foto</th>
                            <th className="grid-item-agenda">Apellido</th>
                            <th className="grid-item-agenda">Nombre</th>
                            <th className="grid-item-agenda">Telefono</th>
                            <th className="grid-item-agenda">Email</th>
                        </tr>
                    </thead>
                    <tbody >
                        {contactosFiltrados.map((contacto: Contacto, index) => (
                            <tr key={contacto.id}>
                                <td className="grid-item"><img src={contacto.fotourl} alt={contacto.apellido} /></td>
                                <td className="grid-item">{contacto.apellido}</td>
                                <td className="grid-item">{contacto.nombre}</td>
                                <td className="grid-item">{contacto.telefono}</td>
                                <td className="grid-item">{contacto.email}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            <h3>Busqueda por Indice</h3>
            <div className="grid-container">
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("a")}>A</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("c")}>C</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("b")}>B</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("d")}>D</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("e")}>E</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("f")}>F</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("g")}>G</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("h")}>H</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("i")}>I</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("j")}>J</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("k")}>K</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("l")}>L</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("m")}>M</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("n")}>N</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("ñ")}>Ñ</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("o")}>O</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("p")}>P</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("q")}>Q</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("r")}>R</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("s")}>S</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("t")}>T</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("u")}>U</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("v")}>V</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("w")}>W</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("x")}>X</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("y")}>Y</a></div>
                <div className="grid-item"><a className="boton" onClick={() => getcontactosFiltrados("z")}>Z</a></div>
            </div>
        </div>
    )
}

export default AgendaContacto;