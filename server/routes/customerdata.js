const router = require("express").Router();
const Customer = require("../models/Customer");

router.get("/", (res, next) => {
    Customer.find()
    .then((customerData) => {
        console.log(customerData);
        res.status(200).json(customerData);
    })
    .catch((err) => next(err));
});

router.post("/add", (req, res, next) => {
    const { lastName, firstName, gender, street, postalCode, city } = req.body;
    console.log(req.body);
    Customer.create({
        lastName,
        firstName,
        gender,
        street,
        postalCode,
        city
    })
    .then(customer => {
        res.status(201).json(customer);
    })
    .catch(err => {
        next(err);
    })
});

router.get("/:id", (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customerId) => {
        if (!customerId) {
            res.status(404).json(customerId);
        } else {
            res.status(200).json(customerId);
        }
    })
    .catch((err) => next(err));
});

router.put("/:id", (req, res, next) => {
    const { lastName, firstName, gender, street, postalCode, city } = req.body;
    Customer.findByIdAndUpdate(
        req.params.id,
        { 
            lastName: lastName, 
            firstName: firstName, 
            gender: gender, 
            street: street, 
            postalCode: postalCode, 
            city: city 
        },
        { new: true }
    )
    .then(updatedCustomerId => {
        res.status(200).json(updatedCustomerId);
    })
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
    Customer.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).json({ message: "customer deleted"} );
    })
    .catch(err => next(err));
});

module.exports = router;