import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../api.js";
import { Loading, Restaurant } from "../components";

export function RootPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurants({ limit: 3 }).then((data) => {
      setRestaurants(data);
    });
  }, []);

  return (
    <>
      <h2 className="title is-3">人気のラーメン店</h2>
      <div className="block">
        {restaurants == null ? (
          <Loading />
        ) : (
          restaurants.rows.map((restaurant) => {
            return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          })
        )}
      </div>
      <div className="has-text-right">
        <Link className="button is-warning" to="/restaurants">
          全てのラーメン店を見る
        </Link>
      </div>
    </>
  );
}