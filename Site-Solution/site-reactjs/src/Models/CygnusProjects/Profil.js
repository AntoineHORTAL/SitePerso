const mongoose = require('mongoose');

const ProfilSchema = new mongoose.Schema({
    Id: Int32Array,
    IdUser: Int32Array,
    NomProfil: String,
    //NiveauGlobal: Int32Array,
    //ProgressionGlobal: Int32Array
});

module.exports = mongoose.model('Profil', ProfilSchema);