# Proyecto CRUD con JS

Proyecto CRUD con Vite utilizando JavaScript Vanilla para la gestión de usuarios (creación, actualización y eliminación), necesitarás configurar los archivos y la estructura del proyecto. A continuación, se proporciona una guía paso a paso con todos los archivos necesarios`.

### 1. Configuración del Proyecto Vite

Primero, crea un nuevo proyecto Vite:

```bash
npm create vite@latest JavascriptCrud --template vanilla
cd JavascriptCrud
npm install
```

### 2. Archivos del Proyecto

#### `index.html`

#### `style.css`

#### `main.js`

#### `crud.js`


### 4. Ejecutar el Proyecto

Inicia el servidor de desarrollo de Vite:

```bash
npm run dev
```

Abre tu navegador y ve a la url que te proporciona **VITE**  para ver la aplicación de gestión de usuarios.

### Explicación del Proyecto

- **index.html**: Define la estructura básica de la página web con un formulario para agregar y editar usuarios, y una tabla para mostrar la lista de usuarios.
- **style.css**: Proporciona estilos básicos para la página.
- **main.js**: Gestiona la lógica de la aplicación, incluyendo el manejo del formulario y los eventos de la tabla. Utiliza funciones asincrónicas para interactuar con la API.
- **crud.js**: Contiene las funciones CRUD para gestionar usuarios utilizando una API.

Este proyecto básico te permite agregar, editar y eliminar usuarios utilizando una API. Asegúrate de reemplazar `'https://your-api-url.com'` con la URL de tu API real.

> **Nota:** En mi caso, estoy utilizando una API de prueba: `https://jsonplaceholder.typicode.com/users`. Esta API es suficiente para realizar pruebas y verificar los estados y métodos correctos en la sección de Red del inspector del navegador. Sin embargo, dado que es una API remota de prueba, las operaciones de creación, edición y eliminación no se reflejarán en el renderizado de la aplicación.