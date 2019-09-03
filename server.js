"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

const scoresRouter = require("./scores.api");
const questionsRouter = require("./question.api");

app.use(cors());

app.use(express.json());
app.use("/", scoresRouter);
app.use("/", questionsRouter);

const port = 4200;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

module.exports = app;
