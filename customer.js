// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
router.get("/customer/all", (request, response) => {
  database.connection.all("select * from customer", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});
//Note: use query instead of all for MySQL - database.connection.query("select * from customer"

// defines an API which takes id in the request and return the record in response
router.get("/customer/id", (request, response) => {
  database.connection.all(
    `select shop_order.id from shop_order, customer
    where shop_order.customerID=customer.id AND customer.gender="F"`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

module.exports = {
  router,
};
