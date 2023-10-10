import { db} from "../database/database.js";
import { DataTypes } from "sequelize";
export const notas= db.define('notas', {
    id_notas:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nota1:{
        type: DataTypes.FLOAT(2),

    },
    nota2:{
        type: DataTypes.FLOAT(2),

    },
    nota3:{
        type: DataTypes.FLOAT(2),

    }

},{
    timestamps: false
}
)