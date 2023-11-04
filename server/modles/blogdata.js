const mongoose = require ('mongoose')
const BlogSchema = new mongoose.Schema({
    imgurl:String,
    writename: String, 
    title: String,
    time: String,
    content: String, 
    
})

const Blogmodle = mongoose.model("BlogData", BlogSchema)
module.exports = Blogmodle