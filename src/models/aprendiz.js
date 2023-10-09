import { DataTypes } from "sequelize";
import {db} from "../database/database.js";

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
        type: DataTypes.STRING,

    },
    emailAprendiz:{
        type: DataTypes.STRING,

    }




},
{
    tableName: 'aprendiz',
    timestamps: false
})









