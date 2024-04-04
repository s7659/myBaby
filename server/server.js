require("dotenv").config()
const express=require("express")
const cors=require("cors")

const corsOptions=require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT||6754
const app=express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/users",require("./routes/userRoute"))
app.use("/api/photos",require("./routes/photoRoute"))
app.use("/api/posts",require("./routes/postRoute"))

app.use("/api/todos",require("./routes/todoRoute"))

mongoose.connection.once('open',()=>{
    console.log("connected to MongoDB");
    app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
})

mongoose.connection.on('error',err=>{
    console.log(err);
})