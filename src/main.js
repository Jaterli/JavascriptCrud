// Importa las funciones CRUD desde el archivo crud.js
import { getUsers, addUser, updateUser, deleteUser } from './crud.js';

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene referencias a los elementos del formulario y la tabla
    const userForm = document.getElementById('user-form');
    const userIdField = document.getElementById('user-id');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const usersTableBody = document.querySelector('#users-table tbody');
    const cancelBtn = document.getElementById('cancel-btn');

    // Función para renderizar los usuarios en la tabla
    const renderUsers = async () => {
        // Obtiene la lista de usuarios de la API
        const users = await getUsers();
        // Limpia el contenido de la tabla
        usersTableBody.innerHTML = '';
        // Recorre cada usuario y crea una fila en la tabla
        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button data-id="${user.id}" class="edit-btn">Edit</button>
                    <button data-id="${user.id}" class="delete-btn">Delete</button>
                </td>
            `;
            // Añade la fila a la tabla
            usersTableBody.appendChild(tr);
        });
    };

    // Maneja el evento de envío del formulario
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        const id = userIdField.value; // Obtiene el ID del usuario
        const name = nameField.value; // Obtiene el nombre del usuario
        const email = emailField.value; // Obtiene el email del usuario

        if (id) {
            // Si hay un ID, actualiza el usuario existente
            await updateUser(parseInt(id), name, email);
        } else {
            // Si no hay ID, agrega un nuevo usuario
            await addUser(name, email);
        }

        userForm.reset(); // Resetea el formulario
        userIdField.value = ''; // Limpia el campo ID
        renderUsers(); // Renderiza los usuarios nuevamente
    });

    // Maneja el evento de clic en el botón de cancelar
    cancelBtn.addEventListener('click', () => {
        userForm.reset(); // Resetea el formulario
        userIdField.value = ''; // Limpia el campo ID
    });

    // Maneja los eventos de clic en los botones de la tabla
    usersTableBody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit-btn')) {
            // Si se hizo clic en el botón de editar
            const id = e.target.dataset.id; // Obtiene el ID del usuario
            const user = (await getUsers()).find(user => user.id == id); // Obtiene el usuario de la API
            userIdField.value = user.id; // Rellena el campo ID
            nameField.value = user.name; // Rellena el campo nombre
            emailField.value = user.email; // Rellena el campo email
        }

        if (e.target.classList.contains('delete-btn')) {
            // Si se hizo clic en el botón de eliminar
            const id = e.target.dataset.id; // Obtiene el ID del usuario
            await deleteUser(parseInt(id)); // Elimina el usuario de la API
            renderUsers(); // Renderiza los usuarios nuevamente
        }
    });

    // Renderiza los usuarios inicialmente al cargar la página
    renderUsers();
});
