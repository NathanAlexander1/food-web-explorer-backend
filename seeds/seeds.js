const sequelize = require("../config/connection");
const {
    User
  } = require("../models");

  const userData = [
    {
      name: "Nigel Thornberry",
      email: "nigel@gmail.com",
      password: "mydaughtertalkstoanimals",
    }
  ];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  };

  seedDatabase();