// Define la URL base de la API. Reemplaza con la URL de tu API si es diferente.
const API_URL = 'https://jsonplaceholder.typicode.com';

// Función para obtener la lista de usuarios de la API
export const getUsers = async () => {
    // Realiza una solicitud GET a la API para obtener los usuarios
    const response = await fetch(`${API_URL}/users`);
    // Convierte la respuesta a formato JSON y la retorna
    return response.json();
};

// Función para agregar un nuevo usuario a la API
export const addUser = async (name, email) => {
    // Realiza una solicitud POST a la API para agregar un usuario
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST', // Método HTTP para agregar un recurso
        headers: {
            'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
        },
        // Cuerpo de la solicitud que contiene los datos del usuario en formato JSON
        body: JSON.stringify({ name, email })
    });
    // Convierte la respuesta a formato JSON y la retorna
    return response.json();
};

// Función para actualizar un usuario existente en la API
export const updateUser = async (id, name, email) => {
    // Realiza una solicitud PUT a la API para actualizar un usuario específico
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT', // Método HTTP para actualizar un recurso
        headers: {
            'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
        },
        // Cuerpo de la solicitud que contiene los datos actualizados del usuario en formato JSON
        body: JSON.stringify({ name, email })
    });
    // Convierte la respuesta a formato JSON y la retorna
    return response.json();
};

// Función para eliminar un usuario de la API
export const deleteUser = async (id) => {
    // Realiza una solicitud DELETE a la API para eliminar un usuario específico
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE' // Método HTTP para eliminar un recurso
    });
    // Convierte la respuesta a formato JSON y la retorna
    return response.json();
};
