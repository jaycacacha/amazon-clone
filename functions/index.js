const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51I7yl0DCtbDnTuZT10XdZPLcs6XVc5tcd6f1FbbxU7nhowhyHBfUBnua7GMdi8BzZcCEG4H3d9m9pI8qmiXWbFD200dGQUh4zr"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// API ENDPOINT
// http://localhost:5001/clone-f6d1b/us-central1/api
