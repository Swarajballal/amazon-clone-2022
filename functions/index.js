/* eslint-disable indent */
/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51LIqpaSIm3ABHMx3IP8M7idAG9b4T2tQHuIS4HbepUob3dJSWVKRggWlabEMQu4MlPl8sYfaVrxsJ6fhp2qhYJKj00OUyheKdv");

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
// http://localhost:5001/clone-44045/us-central1/api
