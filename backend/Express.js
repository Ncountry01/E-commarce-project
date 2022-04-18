const  express = require ('express')
const  cors = require ("cors")
const mongoose = require('mongoose')

const  port = process.env.PORT || 9002;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const mongodb = require ('./mongodb/connect.js')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.get('/', async(req, res)=> {
    res.send("Hello Express Js");
})

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(port,() => {
    console.log(`BE server is running on this ${port}`)
})