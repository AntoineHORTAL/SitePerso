const mongoose = require('mongoose');
const { type } = require('node:os');

const ProfilSchema = new mongoose.Schema({
    Profil: {
        Id: { type: Number, required: true, unique: true },
        NomProfil: { type: String, required: true },
        IdUser: { type: Number, required: true },
        //NiveauGlobal: { type: Number, required: true },
        //ProgressionGlobal: { type: Number, required: true }
    }
}, {
    collection: 'Profils'
});

module.exports = mongoose.model('Profil', ProfilSchema);