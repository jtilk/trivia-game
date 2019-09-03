"use strict";

const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAllScores(req, res) {
  pool.query("select * from scores limit 10").then(result => {
    res.send(result.rows);
  });
}

router.get("/scores", selectAllScores);

router.post("/scores", (req, res) => {
  pool
    .query("insert into scores (score) values ($1::int)", [req.body.score])
    .then(() => {
      selectAllScores(req, res);
    });
});

module.exports = router;
