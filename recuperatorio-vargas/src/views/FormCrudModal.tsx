import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from "../entidades/Contacto";
import { getAllContactos, saveOrUpdate } from "../accesorios/LlamadasBack";



interface Formdata {
    id: number,
    apellido: string,
    nombre: string,
    telefono: number,
    email: string,
    fotourl: string,
}

const FormCrudView = () => {
    const { id } = useParams();
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [contactoSeleccionado, setContactoSeleccionado] = useState<Contacto | undefined>(undefined);
    const [formData, setFormData] = useState<Formdata>({
        id: 0,
        apellido: "",
        nombre: "",
        telefono: 0,
        email: "",
        fotourl: "",
    });

    async function getContactos() {
        //let datos: Contacto[] = await getAllContactos();
        let datos2 :Contacto[] = [];
        let contactoTest: Contacto = new Contacto(3000, "test", "test", 123, "test@gmail", "test")
        datos2.push(contactoTest)
        setContactos(datos2);
    }

    function buscarId(idx: number) {
        for (let contacto of contactos) {
            console.log(contacto)
            if (contacto.id === idx) {
                console.log(contacto)
                setContactoSeleccionado(contacto);
            }
        }
    }

    useEffect(() => {
        getContactos();
        if (id === undefined) {
            console.log("no se encuentra")
        } else {
            buscarId(parseInt(id))
        }
    }, []);

    useEffect(() => {
        if (contactoSeleccionado) {
            setFormData(contactoSeleccionado)
        } else {
            setFormData({
                id: 0,
                apellido: "",
                nombre: "",
                telefono: 0,
                email: "",
                fotourl: "",
            })
        }
    }, [contactoSeleccionado])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let contacto = new Contacto(formData.id, formData.apellido, formData.nombre, formData.telefono, formData.email, formData.fotourl);
        saveOrUpdate(contacto).then(() => {
            window.history.back();
        });

    };

    return (
        <div className="FormCrudModal">
            <h1>{contactoSeleccionado ? "Modificar" : "Agregar"}</h1>
            <div className="FormCrudView">
                <form onSubmit={handleSubmit}>
                    <div className="form-div-container">
                        <label htmlFor="">ID</label>
                        <input type="number" name="id" value={formData.id} placeholder="Id" onChange={handleChange} disabled />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="apellido" value={formData.apellido} placeholder="apellido" onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} placeholder="nombre" onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="">Telefono</label>
                        <input type="number" name="telefono" value={formData.telefono} placeholder="telefono" onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" value={formData.email} placeholder="email" onChange={handleChange} />
                    </div>

                    <div className="form-div-container">
                        <label htmlFor="">Foto Url</label>
                        <input type="text" name="fotourl" value={formData.fotourl} placeholder="fotourl" onChange={handleChange} />
                    </div>

                    <div>
                        <button type="submit" className='btn btn-primary'>{contactoSeleccionado ? 'Guardar cambios' : 'Agregar'}</button>
                        <button className='btn btn-secondary' onClick={() => window.history.back()}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormCrudView;