const express = require("express");
const app = new express();
const PORT = 3000;

function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMesssage(username) {
  return `Hello, ${username}!`;
}

app.get("/greet", (req, res) => {
  const username = req.query.username;
  res.send(getGreetingMesssage(username));
});

function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (req, res) => {
  const password = req.query.password;
  res.send(checkPasswordStrength(password));
});

function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

function getSubscriptionStatus(username, isSubscribed) {
  return `${username} is ${isSubscribed == "true" ? "subscribed" : "not subscribed"}`;
}

app.get("/subscription-status", (req, res) => {
  const username = req.query.username;
  const isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

app.get("/discounted-price", (req, res) => {
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

function getPersonalizedGreeting(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}`;
}

app.get("/personalized-greeting", (req, res) => {
  const age = req.query.age;
  const gender = req.query.gender;
  const name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  const discountedPrice = price - (price * discount) / 100;
  const finalPrice = discountedPrice + (discountedPrice * tax) / 100;
  return finalPrice;
}

app.get("/final-price", (req, res) => {
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  const tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
  const running = parseFloat(req.query.running);
  const swimming = parseFloat(req.query.swimming);
  const cycling = parseFloat(req.query.cycling);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(PORT, () => console.log(`Server started listening on ${PORT}`));
