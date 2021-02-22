const express = require('express'),
    bp = require('body-parser'),
    app = express(),
    cors = require('cors'),
    { graphqlHTTP } = require('express-graphql'),
    DB = require('./config/db'),
    schema = require('./graphql/schema'),
    userModel = require('./model/user'),
    pokemonModel = require('./model/pokemon')


app.use(cors())
app.use(bp.json())
app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

userModel.hasMany(pokemonModel)
pokemonModel.belongsTo(userModel, {
    onDelete: 'CASCADE'
})


DB.sync()
    .then((res) => {
        app.listen(1818, () => {
            console.log("Server running...")
        })
    })