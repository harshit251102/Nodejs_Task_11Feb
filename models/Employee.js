const BaseModel = require("./BaseModel");
class Employee extends BaseModel{
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        mobile: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        joindate: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        dob: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        department: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        designation: {
          type: DataTypes.STRING,
          defaultValue: null,
        },
        reportingUser:{
          type: DataTypes.STRING,
          defaultValue: null
        }
      },
      {
        modelName: "Employee",
        tableName: "employee",
        underscored: true,
        sequelize,
      }
    );
  }
}
module.exports = Employee;
