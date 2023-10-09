import Sequelize from "sequelize";

export const db= new Sequelize('sena', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});