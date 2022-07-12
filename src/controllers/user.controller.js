import user from '../models/user.model';

export const getUsers = async(req, res) => {
    const users = await user.find();
    res.json(users);
}

export const createUser = async (req, res) => {
    const {name, lasname, email, password, username} = req.body;
    const newUser = new user({name, lasname, email, password, username});
    const userSave = await newUser.save();
    res.status(201).json(userSave);
}


