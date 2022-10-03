import {Sequelize} from "sequelize";
import sequelize from "../config/database";

const Player = sequelize.define('user', {
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
        numberOfMatches: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        goalsScored: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: false
        },
        numberOfYellows: {
            type: Sequelize.INTEGER,
            defaultValue: false,
        },
        numberOfReds: {
            type: Sequelize.INTEGER,
            defaultValue: false,
        },
    },
)

export default Player;