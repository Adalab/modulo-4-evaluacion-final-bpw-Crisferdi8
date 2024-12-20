# # API de Grupos de Música

Esta API permite a los usuarios interactuar con una base de datos de grupos de música, proporcionando funcionalidades para listar, obtener, agregar, actualizar y eliminar registros. La aplicación está construida con Node.js, Express y MySQL.

# Características

Recuperar todos los grupos de música

Obtener detalles de un grupo de música específico por su ID

Agregar un nuevo grupo de música

Actualizar un grupo de música existente

Eliminar un grupo de música

# Requisitos previos

Node.js (se recomienda la versión 14 o superior)

MySQL

dotenv para gestionar variables de entorno

# Instalación

Clona el repositorio:

git clone <repository-url>
cd <repository-folder>

#Instala las dependencias:

npm install

# Configura las variables de entorno:
Crea un archivo .env en el directorio raíz y añade las siguientes variables:

USER_DB=<tu-usuario-de-base-de-datos>
USER_PASSWORD=<tu-contraseña-de-base-de-datos>

Inicia el servidor:

node src/index.js

El servidor se iniciará en http://localhost:4002.

# # Endpoints de la API

# 1. Obtener todos los grupos de música

GET /api/groups

Recupera todos los grupos de música en la base de datos.

Ejemplo de respuesta:

{
  "info": { "count": 3 },
  "results": [
    { "id": 1, "name": "Grupo A", "musical_style": "Pop", "song": "Canción Éxito", "year": 2000 },
    { "id": 2, "name": "Grupo B", "musical_style": "Rock", "song": "Clásico Rock", "year": 1995 }
  ]
}

# 2. Obtener un grupo de música específico

GET /api/group/:id

Recupera los detalles de un grupo de música específico por su ID.

Ejemplo de respuesta:

{
  "succes": true,
  "results": {
    "id": 1,
    "name": "Grupo A",
    "musical_style": "Pop",
    "song": "Canción Éxito",
    "year": 2000
  }
}

# 3. Agregar un nuevo grupo de música

POST /api/group

Agrega un nuevo grupo de música a la base de datos.

Cuerpo de la solicitud:

{
  "name": "Nuevo Grupo",
  "musical_style": "Jazz",
  "song": "Nueva Canción",
  "year": 2022
}

Ejemplo de respuesta:

{
  "succes": true,
  "id": 4
}

# 4. Actualizar un grupo de música

PUT /api/group/:id

Actualiza un grupo de música existente con los detalles proporcionados.

Cuerpo de la solicitud:

{
  "name": "Grupo Actualizado",
  "musical_style": "Electrónica",
  "song": "Canción Actualizada",
  "year": 2021
}

Ejemplo de respuesta:

{
  "succes": true
}

# 5. Eliminar un grupo de música

DELETE /api/group/:id

Elimina un grupo de música de la base de datos por su ID.

Ejemplo de respuesta:

{
  "succes": true
}


# Manejo de errores

400 Bad Request: Datos de entrada faltantes o inválidos.

500 Internal Server Error: Problemas al conectarse a la base de datos o ejecutar una consulta.

Ejemplo de archivo .env

USER_DB=mi_usuario_de_base_de_datos
USER_PASSWORD=mi_contraseña_segura

# # Ejecutar la aplicación

Inicia el servidor:

node src/index.js

# Accede a los endpoints de la API en http://localhost:4002.

