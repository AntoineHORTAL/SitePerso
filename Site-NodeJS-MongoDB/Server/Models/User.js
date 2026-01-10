const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    User: {
        Id: { type: Number, required: true, unique: true },
        Identifiant: { type: String, required: true, unique: true },
        MotDePasse: { type: String, required: true }
    }
}, {
    collection: 'Users'
});

module.exports = mongoose.model('User', userSchema);