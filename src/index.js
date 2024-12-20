const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");



//CREAR EL SERVIDOR
const api = express();

//CONFIGURAR EL SERVIDOR
api.use(cors());
api.use(express.json());

//CONFIGURAR EL FICHERO PARA PODER USAR VARIABLES DE ENTORNO
require("dotenv").config();

//FUNCION PARA CONECTARME A LA BASE DE DATOS
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "mysql-359d8630-fernandezcristina87-bfb0.d.aivencloud.com",
        user: process.env.USER_DB,
        port: "26189",
        password: process.env.USER_PASSWORD,
        database: "music_groups"
    })
    connection.connect();
    return connection;
}

//ESCUCHAR EL PUERTO
const port = 4002;
api.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})

//ENDPOINTS
/*
    -Conectarse a la Base de datos
    -Consultar la BD para obtener todas las recetas--> SELECT
    -Cerrar la conexión
    -Enviar respuesta a frontend
 */
api.get("/api/groups", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM music_gr";
    const [result] = await connection.query(query);
    console.log(result);
    connection.end();

    res.status(200).json({
        info: { count: result.length },
        results: result
    });

})

api.get("/api/group/:id", async (req, res) => {
    const idGroup = req.params.id;
    console.log(idGroup);
    const connection = await getDBConnection();
    const query = "SELECT * FROM music_gr WHERE id = ?";
    const [result] = await connection.query(query, [idGroup]);

    console.log("resultado", result);
    connection.end();
    res.status(200).json({
        succes: true,
        results: result[0]
    });
})

//ENDPOINT PARA AÑADIR NUEVO GRUPO DE MUSICA
/*
    -Recoger los datos del grupo que me envía frontend (body params)
    -Conectarse a la Base de datos
    -Añadir el nuevo grupo de musica a mi Base de datos (INSERT INTO)
    -Finalizar conexión
    -Responder a frontend
 */

api.post("/api/group", async (req, res) => {
    console.log(req.body);
    console.log(req.body.song);
    const { name, musical_style, song, year } = req.body;
    //SI FRONTEND NO ME ENVIA LOS DATOS LE LANZO UN ERROR
    if (!name || !musical_style || !song || !year) {
        res.status(400).json({
            succes: false,
            message: "Bad Request"
        })
    } else {

        const connection = await getDBConnection();
        const query = "INSERT INTO music_gr (name, musical_style, song, year) VALUES(?,?,?,?)";
        const [result] = await connection.query(query, [name, musical_style, song, year]);
        console.log(result);
        connection.end();
        res.status(201).json({
            succes: true,
            id: result.insertId
        })
    }
})

/*
ACTUALIZAR LOS VALORES DE UN GRUPO CON LA INFO QUE ME ENVIA FRONTEND
    -Recoger los datos que me envia frontend
        -id del grupo a actualizar (url params)
        -los campos de los grupos (body params)
    -Me conecto a la Base de datos
    -Actualizar el registro que tenga ese id con los nuevos datos --> UPDATE
    -Finalizar conexion
    -Responder a frontend
 */
api.put("/api/group/:id", async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const { name, musical_style, song, year } = req.body;
    const connection = await getDBConnection();
    const query = "UPDATE music_gr SET name = ?, musical_style = ?, song = ?, year = ? WHERE id = ?";
    const [result] = await connection.query(query, [name, musical_style, song, year, id])
    connection.end();

    res.status(200).json({ succes: true });
})

//ELIMINAR UNA RECETA
api.delete("/api/group/:id", async (req, res) => {
    const connection = await getDBConnection();
    const query = "DELETE FROM music_gr WHERE id = ?";
    const [result] = await connection.query(query, [req.params.id]);

    console.log(result);
    res.status(200).json({ succes: true });
})