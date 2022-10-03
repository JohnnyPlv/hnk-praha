import sequelize from "../config/database";
import {Sequelize} from "sequelize";

const PlayerStatTurnament = sequelize.define('playerStatTurnament', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        firstSeason: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        seasonPlayed: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        matchesPlayed: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        goalScored: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        golieZeros: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        yellowCards: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        redCards: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        bestPlayerCount: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
    },
)

export default PlayerStatTurnament;