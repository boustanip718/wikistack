//setting up Sequelize
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    tile: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT, //TEXT vs STRING?
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'), //ENUM?
    }
})

const User = db.define('users', {
    name:{
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
})

module.exports = {
    db,
    Page,
    User
}