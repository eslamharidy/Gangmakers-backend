const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    followers: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "user"
  }
);

module.exports = User;
