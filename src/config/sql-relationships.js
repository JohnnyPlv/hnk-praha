import Player from "../models/Player";
import PlayerStatLeague from "../models/PlayerStatLeague";
import playerStatLeague from "../models/PlayerStatLeague";
import sequelize from "./database";

export const createRelationships = () => {
    Player.belongsTo(PlayerStatLeague, {
        as: 'player',
        foreignKey: 'playerStatLeagueId',
        getPlayerStatLeague() {
            return this.getDataValue('player')
        }
    });

    sequelize.sync()
        .then(res => {
            console.log(res);
        });
}

