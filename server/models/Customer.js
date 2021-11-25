const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
    lastName: String,
    firstName: String,
    gender: String,
    street: String,
    postalCode: String,
    city: String
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
