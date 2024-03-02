const router = require("express").Router();
const {
  User, Interest
} = require("../../models");

//Get all interests
router.get("/", async (req, res) => {
  try {
    const interests = await Interest.findAll({
      include: [User],
    });
    res.status(200).json(interests);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "an error has occured", err });
  }
});

// //get dog guesses by guess id
// router.get("/:id", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.findByPk(req.params.id, {
//       include: [User, Dog, CocktailIngredient],
//     });
//     if (!dogGuess) {
//       res.status(404).json({ message: "No dog guess found with that ID!" });
//       return;
//     }
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //get dog guesses by guessed dog id
// router.get("/dogs/:dogid", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.findAll({
//       where: {
//         "$DogGuess.DogId$": req.params.dogid,
//       },
//       include: [User, Dog, CocktailIngredient],
//     });
//     if (!dogGuess) {
//       res.status(404).json({ message: "No dog guess found with that ID!" });
//       return;
//     }
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //get all Full guesses by user id
// router.get("/users/:userId/", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.findAll({
//       where: {
//         "$User.id$": req.params.userId,
//       },
//       include: [User, Dog, CocktailIngredient],
//     });
//     if (!dogGuess) {
//       res.status(404).json({ message: "No dog guess found with that ID!" });
//       return;
//     }
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //get dog guesses ABOUT A CERTAIN DOG by A CERTAIN USER
// router.get("/users/:userid/dogs/:dogid/", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.findAll({
//       where: {
//         "$DogGuess.UserId$": req.params.userid,
//         "$DogGuess.DogId$": req.params.dogid,
//       },
//       include: [User, Dog, CocktailIngredient],
//     });
//     if (!dogGuess) {
//       res.status(404).json({ message: "No dog guess found with that ID!" });
//       return;
//     }
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //upload a new dog
// router.post("/", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.create({
//       breed: req.body.breed,
//       percentage: req.body.percentage,
//       UserId: req.body.UserId,
//       DogId: req.body.DogId,
//     });
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       msg: "The dog you are creating does not have a valid user ID associated with it",
//     });
//   }
// });

// //Update dog guess
// router.put("/:id", async (req, res) => {
//   try {
//     const dogGuess = await DogGuess.update(req.body, {
//       where: { id: req.params.id },
//     });
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       msg: "Check that the dog guess you are editing has either a valid id",
//     });
//   }
// });

// //delete dog
// router.delete("/:id", async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const dogGuess = await DogGuess.destroy({
//       where: { id: req.params.id },
//     });
//     res.status(200).json(dogGuess);
//   } catch (err) {
//     console.log({ msg: "There is no dog guess with that ID" });
//   }
// });

module.exports = router;