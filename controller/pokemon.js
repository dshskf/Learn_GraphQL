const pokemonModel = require('../model/pokemon')

exports.getAllPokemon = async (parent, args) => {
    return await pokemonModel.findAll()
}

exports.addPokemon = async (parent, args) => {
    return await pokemonModel.create({ ...args })
}

exports.deletePokemon = async (parent, args) => {
    return await pokemonModel.destroy({
        where: {
            id: args.id
        }
    })
}