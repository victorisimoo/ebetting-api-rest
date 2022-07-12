import role from '../models/role';

export const createRoles = async () => {
    try {

        const count = await role.countDocuments();
        if (count > 0) return;
        
        const rolecreate = await Promise.all([
            new role({ name: 'admin' }).save(),
            new role({ name: 'user' }).save(),
            new role({ name: 'moderator' }).save()
        ]);

    }catch(err){
        console.log(err);
    }
}