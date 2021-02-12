const tutorialResolver = require("../resolvers/tutorial.resolver")

const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Can't create!"
    })
    return
  }

  const response = tutorialResolver(req.body)
  // if (response.error) {
  //   return res.status(500).send(response)
  // }
  res.send(response)
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null
   
  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error accured while creating the Tutorial"
      })
    })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPK(id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: `Error retrieving Tutorial by id=${id}` 
    })
  })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Tutorial.update(req.body, {
    where: {id: id}
  })
  .then(num => {
    if (num === 1) {
      res.send({
        message: "Tutorial was updated successfully"  
      })
    } else {
      res.send({
        message: `Can't update Tutorial with id=${id}. Maybe Tutorial was not found.`  
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating Tutorial by id=${id}` 
    })
  })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error accured while creating the tutorials."
      })
    })
};
