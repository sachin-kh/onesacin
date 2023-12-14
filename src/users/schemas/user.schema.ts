import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
        type : String, 
        unique : true,
        required: true
    },
    password: {
        type : String, 
        required: true
    },
    role: {
        type : String, 
        enum : ['admin','seller', 'supporter', 'customer']
    },
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt)
        next();

    }catch(err){
        next(err)

    }
})

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise <boolean>{
    return bcrypt.compare(candidatePassword, this.password)
};



export {UserSchema};