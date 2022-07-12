import { Schema, model } from "mongoose";

const betSchema = new Schema(
    {
        idEvent: String,
        idUser: String,
        amountBet: Number,
        statusBet: Number
    },
    {
        timestamps: true,
        versionkey: false
    }
);
export default model('Bets', betSchema);