import userObj from '../models/user';

export const checkDuplicateUserNameOrEmail = async (req, res, next) => {
    const user = await userObj.findOne({username: req.body.username});
    if(user) return res.status(400).json({message: 'Username already exists'});

    const userEmail = await userObj.findOne({email: req.body.email});
    if(userEmail) return res.status(400).json({message: 'Email already exists'});

    next();
}