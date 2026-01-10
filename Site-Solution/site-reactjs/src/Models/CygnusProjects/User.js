const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id: Int32Array,
    Identifiant: String,
    MotDePasse: String
});

module.exports = mongoose.model('User', UserSchema);