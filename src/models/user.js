import {Schema, model} from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
    {
        email: String,
        password: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        roles:[
            {
                ref: "Role",
                type: Schema.Types.ObjectId,
            }
        ]
    },
    {
        timestamps: true,
        versionkey: false
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const passwordhash = await bcrypt.hash(password, 10);
    return passwordhash;
}

userSchema.statics.comparePassword = async (password, recivePassword) => {
    return await bcrypt.compare(password, recivePassword);
}

export default model('Users', userSchema);