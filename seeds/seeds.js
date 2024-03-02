const sequelize = require("../config/connection");
const {
    User, Interest
  } = require("../models");

  const userData = [
    {
      name: "Nigel Thornberry",
      email: "nigel@gmail.com",
      password: "mydaughtertalkstoanimals",
    },
    {
      name: "Spencer Alexander",
      email: "spencer@gmail.com",
      password: "spenceralexander",
    },
    {
      name: "Nathan Alexander",
      email: "nathan@gmail.com",
      password: "nathanalexander",
    }
  ];

  const interestData = [
    {
      organism: "Mountain Goat",
      region: "Olympic Peninsula",
      UserId: 1
    },
    {
      organism: "Bald Eagle",
      region: "Whidbey Island",
      UserId: 2
    },
    {
      organism: "Earthworm",
      region: "Bellevue, WA",
      UserId: 3
    },
  ];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
    const interests = await Interest.bulkCreate(interestData);
  };

  seedDatabase();