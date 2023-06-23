import { Contacto } from '../entidades/Contacto';


//GET CONTACTOS
export async function getAllContactos() {
    let urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php";
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}

//contacto por indice
export async function getContactoXIndice(indice: string) {
    let urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php?indice="+indice;
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}

//save or update
export async function saveOrUpdate(objeto: Contacto) {
	
    let urlServer: string = '';
	let methodM:string = "";
	if(objeto.id === 0){
		urlServer = 'http://168.194.207.98:8081/api_contacto/post_contacto.php';
	    methodM = "POST";
	}else{
        urlServer = 'http://168.194.207.98:8081/api_contacto/put_contacto.php';
		methodM = "PUT";
    }
    console.log(JSON.stringify(objeto));
	await fetch(urlServer, {
	  method: methodM,
	  headers: {
		'Content-Type': 'application/json',
	  },
      body: JSON.stringify(objeto),
	  
	});
}

//delete
export async function deleteById(id:number) {
    let urlServer = "http://168.194.207.98:8081/api_contacto/delete_contacto.php?id="+id;
    await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    
}







