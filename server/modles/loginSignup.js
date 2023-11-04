const mongoose = require ('mongoose')
const LoginSignupSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String, 
})

const loginSignupModel = mongoose.model("LoginSingups", LoginSignupSchema)
module.exports = loginSignupModel