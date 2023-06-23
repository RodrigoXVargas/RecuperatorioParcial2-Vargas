import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EliminarFormModal from "../componentes/EliminarFormModal";
import CrudComponent from "../componentes/CrudComponent";



const CrudView = () => {
    
    return (
        <div className="CrudView">
            <CrudComponent></CrudComponent>
        </div>
    )

}

export default CrudView;