const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Region extends Model {}

Region.init(
  {
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organism: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Region;
