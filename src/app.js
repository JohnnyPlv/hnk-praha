import express from 'express'
import {createRelationships} from "./config/sql-relationships";
import Player from "./models/Player";
import PlayerStatLeague from "./models/PlayerStatLeague";
import sequelize from "./config/database";

const app = express();
createRelationships();
// Player.belongsTo(PlayerStatLeague, {
//     as: 'player',
//     foreignKey: 'playerStatLeagueId',
//     getPlayerStatLeague() {
//         return this.getDataValue('player')
//     }
// });
// Player.belongsTo(PlayerStatLeague)
// sequelize
//     .sync()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     })
app.listen(process.env.PORT || 3000);