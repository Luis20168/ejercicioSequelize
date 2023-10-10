import { DataTypes } from "sequelize";
import { db } from "../database/database.js";
import { curso } from "./curso.js";

export const competencia= db.define('competencia',{
    id_competencia:{
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true

    },
    nombre_com:{
        type: DataTypes.STRING(20),

    }
},{
    tableName: 'competencia',
    timestamps: false
})


curso.hasMany(competencia, {
    foreignKey: 'curso_id_curso', // La clave foránea en la tabla de competencias que hace referencia al curso
    sourceKey: 'idCurso', // La clave en la tabla de cursos que se utiliza como origen
  });
  
  competencia.belongsTo(curso, {
    foreignKey: 'curso_id_curso', // La clave foránea en la tabla de competencias que hace referencia al curso
    targetKey: 'idCurso', // La clave en la tabla de cursos que se utiliza como destino
  });
  










