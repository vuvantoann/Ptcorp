const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pt-crop', 'root', '1234', {
    port: 3306,
    host: 'localhost',
    dialect: "mysql",/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
// (async () => {
//     await sequelize.sync();
//     console.log('Database synchronized');
// })();

module.exports = sequelize