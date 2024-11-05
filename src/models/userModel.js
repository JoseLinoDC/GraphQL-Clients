const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, require: true},
    tel: {type: String, require: true},
    registerDate: {type: Date, require: true},
    userType: {type: String, default: 'CLIENT'},
    PaymentMethod: {type: Array, require: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;