const porta = 8080

const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDdos")
app.use(express.urlencoded({extended:true}))

app.get("./produtos",(req,res,next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id",(req,res,nexxt)=>{
    res.send(bancoDeDados.getProdutos())
})

app.post("/produtos",(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome:req.boy.nome,
        preco:req.boy.preco,
    })
    res.send(produto)
})


app.put("./produtos/:id",(req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})