import express from "express"
import dotenv from "dotenv"
import cors from "cors"

// dotenv.config()

const server=express()
server.use(cors())
server.use(express.json({ limit: '100mb' }))
const PORT =process.env.PORT|| 3000

server.get("/",(req,res)=>{
    const query =req.query
    if (query.name===process.env._NAME_ && query.surname===process.env._SURNAME_) {
        return res.json({you:"are",doing:"well"})
    }
    res.json({who:"you-are"})
})

server.post("/",(req,res)=>{
    const secret_key_api=req.headers["secret_key_api"]
    console.log(req.headers)
    if (secret_key_api===process.env.SECRET_KEY_API) {
        const body=req.body
        console.log(body)
        return res.json({post:"request-done-well",body:body})
    }
   res.json({who:"you-are"})
})

server.get("*",(req,res)=>{
    res.json({what:"can",i:"do",for:"you"})
})

server.listen(PORT,()=>{console.log(`-----------------------${PORT}`)})
