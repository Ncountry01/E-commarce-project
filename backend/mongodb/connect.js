const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Userniry:9519703098@cluster0.ty2ev.mongodb.net/e-commarceapp")
.then(() => 
    console.log('DB connnection established')
)
.catch((err) => {
    console.log("Db connection failed")
})