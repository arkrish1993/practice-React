import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      //Approach 1
      // fetch("https://udemy-http-1c237-default-rtdb.firebaseio.com/meals.json")
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });

      //Approach 2
      const response = await fetch(
        "https://udemy-http-1c237-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw Error("Something went wrong!");
      }
      const data = await response.json();
      let mealsList = [];
      for (let key in data) {
        mealsList.push({
          id: key,
          ...data[key],
        });
      }
      setMeals(mealsList);
      setIsLoading(false);
    };
    fetchMeals().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>{" "}
      </Card>
    </section>
  );
};

export default AvailableMeals;
