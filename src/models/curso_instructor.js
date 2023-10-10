import { DataTypes } from "sequelize";
import { db } from "../database/database.js";
import {curso} from "./curso.js"
import {instructor} from "./instructor.js"

export const curso_instructor= db.define('curso_instructor',{
    id_curso_instuctor:{
        type: DataTypes.INTEGER
        
    }
},{
    timestamps: false
})


curso.belongsToMany(instructor,{
    foreignKey: 'curso_id_curso',
    through: 'curso_instructor'  //hace referencia a la table intermediaria sea la que guarda las foreignKey

})

instructor.belongsToMany(curso,{
    foreignKey: 'instructor_id_instructor',
    through: 'curso_instructor'
})

