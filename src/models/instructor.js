import { DataTypes } from "sequelize";
import {db} from "../database/database.js";


export const instructor= db.define('instructor', {
    id_instructor:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    nombre_inst:{
        type: DataTypes.STRING(45)
    }
},{
    timestamps: false
}
)

