const { DataTypes } = require("sequelize")

module.exports = () => {
    return {
        studentNumber: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        courseNumber: DataTypes.STRING,
        courseName: DataTypes.STRING,
        grade: DataTypes.STRING,
    }
}
