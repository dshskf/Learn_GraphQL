const bcrypt = require('bcrypt')
const userModel = require('../model/user')


exports.getAllUser = async (parent, args) => {
    return await userModel.findAll()
}

exports.getUser = async (parent, args) => {
    return await userModel.findOne({
        where: {
            id: args.id
        }
    })
}

exports.addUser = async (parent, args) => {
    const pass = await bcrypt.hash(args.password, 12)
    return await userModel.create({
        email: args.email,
        name: args.name,
        password: pass
    })
}

exports.deleteUser = async (parent, args) => {     
    return await userModel.destroy({
        where: {
            id: args.id
        }
    })
}