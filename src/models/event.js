import { Schema, model } from "mongoose";

const eventSchema = new Schema(
    {
        titleEvent: String,
        descriptionEvent: String,
        startDate: Date,
        endDate: Date,
        idTeamWin: Number,
        idTeamLoser: Number, 
        winPoints: Number,
        loserPoints: Number
    },
    {
        timestamps: true,
        versionkey: false
    }
);
export default model('Events', eventSchema);