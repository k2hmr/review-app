import express from "express";
import cors from "cors";
import sequelize from "sequelize";
import { Restaurant, Review, User } from "./models.js";

const app = express();
app.use(cors());

app.get("/restaurants", async (req, res) => {
  const limit = +req.query.limit || 5;
  const offset = +req.query.offset || 0;
  const restaurants = await Restaurant.findAndCountAll({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(SELECT COUNT(*) FROM reviews AS r WHERE r.restaurant_id = restaurant.id)`,
          ),
          "review_count",
        ],
      ],
    },
    include: { model: Review, limit: 3, include: { model: User } },
    order: [[sequelize.literal("review_count"), "DESC"]],
    limit,
    offset,
  });
  res.json(restaurants);
});

app.get("/restaurants/:restaurantId", async (req, res) => {
  const restaurantId = +req.params.restaurantId;
  const restaurant = await Restaurant.findByPk(restaurantId);
  if (!restaurant) {
    res.status(404).send("not found");
    return;
  }
  res.json(restaurant);
});

app.get("/restaurants/:restaurantId/reviews", async (req, res) => {
  const restaurantId = +req.params.restaurantId;
  const limit = +req.query.limit || 5;
  const offset = +req.query.offset || 0;
  const restaurant = await Restaurant.findByPk(restaurantId);
  if (!restaurant) {
    res.status(404).send("not found");
    return;
  }
  const reviews = await Review.findAndCountAll({
    include: { model: User },
    where: { restaurantId },
    limit,
    offset,
  });
  res.json(reviews);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
