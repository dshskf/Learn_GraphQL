const _ = require('lodash'),
    userControllers = require('../controller/user'),
    pokemonControllers = require('../controller/pokemon')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLSchema    
} = require('graphql')

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        pokemon: {
            type: new GraphQLList(pokemonType),
            resolve(parent, args) {

            }
        }
    })
})

const pokemonType = new GraphQLObjectType({
    name: 'pokemon',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        element: { type: GraphQLInt },
        level: { type: GraphQLInt },
        user: {
            type: userType,
            resolve(parent, args) {

            }
        }
    })
})


const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
        user: {
            type: userType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: userControllers.getUser
        },
        allUser: {
            type: new GraphQLList(userType),
            resolve: userControllers.getAllUser
        },
        allPokemon: {
            type: new GraphQLList(pokemonType),
            resolve: userControllers.getAllPokemon
        }
    })
})

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addUser: {
            type: userType,
            args: {
                email: { type: GraphQLString },
                name: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve: userControllers.addUser
        },
        deleteUser: {
            type: userType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: userControllers.deleteUser
        },
        addPokemon: {
            type: pokemonType,
            args: {
                name: { type: GraphQLString },
                element: { type: GraphQLInt },
                level: { type: GraphQLInt }
            },
            resolve: pokemonControllers.getAllPokemon
        },
        deletePokemon: {
            type: pokemonType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: pokemonControllers.deletePokemon
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
})