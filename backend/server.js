const express =require("express")
const cors =require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/api/get",(req,res)=>{
    res.status(200).json({
        sucess: true,
        message: "ok success"
    })
})

app.listen(5001,()=>{
    console.log("The server is running on port 5001")
    console.log("sucess")
})