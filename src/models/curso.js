import {DataTypes} from "sequelize";
import {db} from "../database/database.js";

import {aprendiz} from "./aprendiz.js"

export const curso= db.define('curso', {
    idCurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreCurso:{
        type: DataTypes.STRING(45),

    }

},{
    tableName: 'curso',
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
  