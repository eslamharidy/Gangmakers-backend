const Sequelize = require('sequelize')
const db = require('../db')

const User = require ('../user/model')


const Post = db.define('post',{
  
    owner: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    },{
        timestamps: true,
        tableName: 'post'
      })


      Post.belongsTo(User)
      User.hasMany(Post)
      
       
     
    
module.exports = Post