const express = require('express')
const router = express.Router()
const Person = require("../models/person")


//@API http://localhost:5000/api/person
//@desc Add new person
//@access public
router.post("/", (req, res) => {
    const newPerson = new Person({ ...req.body })
    newPerson.save()
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
})

//@API http://localhost:5000/api/person
//@Get all Persons
router.get("/", (req, res) => {
    Person.find()
        .then(persons => res.status(200).json(persons))
        .catch(err => res.send(err))
})


//@API http://localhost:5000/api/person:id
// Get persons by id

router.get('/:_id', (req, res) => {
    let { _id } = req.params
    Person.find({ _id })
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
})


//@API http://localhost:5000/api/person:id
//Delete persons By ID


router.delete('/:_id', (req, res) => {
    let { _id } = req.params
    Person.findByIdAndDelete({ _id })
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
}
)
//@API http://localhost:5000/api/person:id
//Update persons By ID

router.put("/:_id", (req, res) => {
    let { _id } = req.params
    Person.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
})

//@API http:localhost:5000/api/persons
//Get persons By name

router.get("/name/:name", (req, res) => {
        let {name} = req.params
        Person.find({name})
        .then(persons => res.send(persons))
        .catch(err => res.send(err))
    })

module.exports = router