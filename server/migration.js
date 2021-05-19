import { sequelize, Restaurant, Review, User } from "./models.js";
import * as data from "./sample-data.js";

await sequelize.sync({ force: true });
for (const { name, image, map } of data.restaurants) {
  await Restaurant.create({ name, image, map });
}
for (const { sub, nickname } of data.users) {
  await User.create({ sub, nickname });
}
for (const { title, comment, userId, restaurantId } of data.reviews) {
  await Review.create({ title, comment, userId, restaurantId });
}