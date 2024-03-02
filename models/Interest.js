const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Interest extends Model {}

Interest.init(
  {
    organism: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Interest;
