import { DataTypes } from "sequelize";
import {db} from "../database/database.js";
import {curso} from "./curso.js"
export const aprendiz= db.define('aprendiz', {
    idAprendiz:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true



    },
    nombreAprendiz:{
        type: DataTypes.STRING,

    },
    passwordAprendiz:{
        type: DataTypes.STRING
        

    },
    emailAprendiz:{
        type: DataTypes.STRING,

    },
    curso_idCurso:{
        type: DataTypes.INTEGER,
    }




},
{
    tableName: 'aprendiz',
    timestamps: false
})



// En el modelo Curso
curso.hasMany(aprendiz, {
    foreignKey: 'curso_idCurso', // Nombre del campo de clave externa en el modelo Aprendiz
    sourceKey: 'idCurso', // Nombre del campo de clave primaria en el modelo Curso
  });
  
  // En el modelo Aprendiz
  aprendiz.belongsTo(curso, {
    foreignKey: 'curso_idCurso', // Nombre del campo de clave externa en el modelo Aprendiz
  });


export default curso
  









