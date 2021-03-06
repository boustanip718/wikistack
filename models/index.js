//setting up Sequelize
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
        //validate: {
        //    isEmail: true
        //}
    },
    content: {
        type: Sequelize.TEXT, //TEXT vs STRING?
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed') //ENUM?
    }
})

const User = db.define('users', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    db,
    Page,
    User
}