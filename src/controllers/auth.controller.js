import user from '../models/user';
import role from '../models/role';
import jwt from 'jsonwebtoken';
import config from '../config'

export const signup = async (req, res) => {
    const {username, email, password, roles} = req.body;
    const passencrypt = await user.encryptPassword(password);
    const newUser = new user({username, email, password: passencrypt});

    if(roles){
        const foundRoles = await role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    }else {
        const defaultRole = await role.findOne({name: 'user'});
        newUser.roles = [defaultRole._id];   
    }

    await newUser.save();
    res.json({ newUser });
}

export const signin = async (req, res) => { 
    const userFound = await user.findOne({username: req.body.username});
    if(!userFound) return res.status(400).json({message: 'User not found'});

    const isPasswordValid = await user.comparePassword(req.body.password, userFound.password);
    if(!isPasswordValid) return res.status(401).json({message: 'Invalid password'});

    const token = jwt.sign({id: userFound._id}, config.secret, {
        expiresIn: 86400
    });
    res.json({token});
}