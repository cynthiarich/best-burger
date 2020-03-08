const db = require("../models");
const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Op } = require("sequelize");


async function renderHome(req, res) {
    //get burgers added in the last 7 days
    const newest = await db.Burger.findAll({
        where: {
            createdAt: {
                [Op.gte]: moment().subtract(7, "days").toDate()
            }
        },
        order: [['id', 'DESC']]
    });
    console.log("============= Newest burgers =============")
    console.log(newest);
    //get top 10 burgers by upvote - downvote
    const popular = await db.Burger.findAll({
        where: {
            upVotes: {
                [Op.gte]: 5
            }
        },
        order: [['upvotes', 'DESC']]
    });
    console.log("============= Popular burgers =============")
    console.log(popular);
    res.render("burgers", {
        newest,
        popular
    });
}

router.get("/", renderHome);

router.post("/api/new", (req, res) => {
    const { burgerName, burgerMeat, burgerCheese, burgerBread, burgerDesc } = req.body;
    //create the new burger
    db.Burger.create({
        burgerName,
        burgerMeat,
        burgerCheese,
        burgerBread,
        burgerDesc
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(401).json(err);
    });
});

router.post("/api/upvote", (req, res) => {
    const { id } = req.body;
    db.Burger.increment("upVotes", {by: 1,
        where: { id: id }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(401).json(err);
    });;
})

router.post("/api/downvote", (req, res) => {
    const { id } = req.body;
    db.Burger.increment("downVotes", {by: 1,
        where: { id: id }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(401).json(err);
    });;
})

module.exports = router;