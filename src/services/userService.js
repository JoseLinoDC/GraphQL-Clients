const User = require('../models/userModel');

module.exports = {

    getAllUsers: async () => {
        return await User.find();
    },

    createUser: async (user) => {
        const newUser = new User(user);
        return await newUser.save();
    },

    updateUser: async (_id, user) => {
        return await User.findByIdAndUpdate(_id, user);
    },

    deleteUser: async (_id) => { 
        return await User.findByIdAndDelete(_id);
    },
    
}