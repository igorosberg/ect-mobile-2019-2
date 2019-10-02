import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';

import Produto from './src/models/Produto'

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://alunoect:alunoect@cluster0-wkixr.mongodb.net/ect-mobile?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}
)

app.get('/produtos',(req,res) => {
    Produto.find().then(
        (produtos) => {
            res.send(produtos)
        }
    )
})

app.post('/produto',(req,res) => {
    Produto.create(req.body).then(
        (produto) => res.send(produto)
    )
})

app.listen(4001)