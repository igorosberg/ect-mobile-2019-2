import mongoose from 'mongoose'

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
})

const Produto = mongoose.model('Produto',ProdutoSchema)

export default Produto