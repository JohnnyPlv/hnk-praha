import {Sequelize} from "sequelize";
import sequelize from "../config/database";

const Player = sequelize.define('player', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        jerseyNumber: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        position: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
    },
)

export default Player;