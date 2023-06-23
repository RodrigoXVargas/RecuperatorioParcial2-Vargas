
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from '../entidades/Contacto';
import { useEffect, useState } from 'react';
import { deleteById, getAllContactos, getContactoXIndice } from '../accesorios/LlamadasBack';
import EliminarFormModal from './EliminarFormModal';



const CrudComponent: React.FC = () => {
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [contactoSeleccionado, setContactoSeleccionado] = useState<Contacto | undefined>(undefined);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    async function getContactos() {
        let datos: Contacto[] = await getAllContactos();
        setContactos(datos);
    }

    const handleOpenDeleteModal = (contacto?: Contacto) => {
        setIsDeleteModalOpen(true);
        setContactoSeleccionado(contacto);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setContactoSeleccionado(undefined);
    };

    const handleConfirmDelete = () => {
        if (contactoSeleccionado) {
            deleteById(contactoSeleccionado.id)
                .then(() => {
                    handleCloseDeleteModal();
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Error al eliminar el contacto:', error);
                });
        }

    };


    useEffect(() => {
        getContactos();
    }, []);


    return (
        <div className="CrudComponent">
            <h1>Crud de Contactos</h1>
            <button type="button" className="btn btn-primary" onClick={event => window.location.href = 'http://localhost:3000/crud/0'}>Agregar</button>
            <table >
                <thead >
                    <tr >
                        <th >Id</th>
                        <th >Foto</th>
                        <th >Apellido</th>
                        <th >Nombre</th>
                        <th >Telefono</th>
                        <th >Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {contactos.map((contacto: Contacto, index) => (
                        <tr key={contacto.id}>
                            <td>{contacto.id}</td>
                            <td ><img src={contacto.fotourl} alt={contacto.apellido} /></td>
                            <td >{contacto.apellido}</td>
                            <td >{contacto.nombre}</td>
                            <td >{contacto.telefono}</td>
                            <td >{contacto.email}</td>
                            <td>
                                <button type="button" className="btn btn-warning" onClick={event => window.location.href = 'http://localhost:3000/crud/' + contacto.id}>Editar</button>
                                <button type="button" className="btn btn-danger" onClick={() => handleOpenDeleteModal(contacto)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EliminarFormModal
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
            />
        </div>
    )
}

export default CrudComponent;