import bet from '../models/bet';

export const getBets = async(req, res) => {
    const bets = await bet.find();
    res.json(bets);
}

export const createBet = async (req, res) => {
    const {idEvent, idUser, amountBet, statusBet} = req.body;
    const newBet = new bet({idEvent, idUser, amountBet, statusBet});
    const betSave = await newBet.save();
    res.status(201).json(betSave);
}

export const updateBetById = async (req, res) => {
    const updatedBet = await bet.findByIdAndUpdate(req.params.idBet, req.body, {
        new: true,
    });
    res.status(200).json(updatedBet);
}
