/* eslint-disable indent */
/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("enter your secret key");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received Boom!!!>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    });

    // OK response
    response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    });
    });

// - Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
// you will get a end point
