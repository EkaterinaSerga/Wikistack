const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: true,
});

const User = db.define("users", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false,
    validate: {
        isEmail: true,
    } 
 },
});

//title : the page title
//slug : url saved version of page title
//content : page content
//status : if page is open or closed

const Page = db.define("pages", {
  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM("open", "close"), defaultValue: "close" },
});

module.exports = {
  db, Page, User
};


