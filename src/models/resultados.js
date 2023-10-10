import { DataTypes } from "sequelize";
import { db } from "../database/database.js";

import { notas } from "./notas.js";
import {  competencia} from "./competencia.js";

export const resultados= db.define('resultados', {
    id_resultados:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_resul:{
        type: DataTypes.STRING,

    },

},{
    timestamps: false
    
})

competencia.hasMany(resultados,{
    foreignKey: 'competencia_id_competencia',
    sourceKey: 'id_competencia'
})

resultados.belongsTo(competencia,{
    foreignKey: 'competencia_id_competencia'
})

notas.hasMany(resultados,{
    foreignKey: 'notas_id_notas',
    sourceKey: 'id_notas'
})

resultados.belongsTo(notas,{
    foreignKey: 'notas_id_notas',
})