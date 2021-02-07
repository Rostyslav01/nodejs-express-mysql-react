module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller")
  const router = require("express").Router()

  // Create a new Tutorial
  router.post("/", tutorials.create)

  // Get a current Tutorial
  router.post("/:id", tutorials.findOne)

  // Update Tutorial with id 
  router.put("/:id", tutorials.update)

  app.use('api/tutorials', router)
}