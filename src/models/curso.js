import {DataTypes} from "sequelize";
import {db} from "../database/database.js";


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



