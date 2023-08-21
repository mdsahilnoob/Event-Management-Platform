const Sequelize = require('sequelize')

const connection = new Sequelize(
    'ibento',
    'root',
    '',
    {
      host:'localhost',
      dialect:'mysql',
      logging: false
    },
    
  )

export default connection;