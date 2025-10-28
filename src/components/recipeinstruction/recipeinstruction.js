import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./recipeinstruction.css";
import {FaArrowLeft } from "react-icons/fa";
import { GiChefToque,GiSaltShaker } from "react-icons/gi";
const Recipeinstruction = () => {
  const { id } = useParams(); // get id from route
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError("No details found for this meal.");
        }
      } catch {
        setError("Failed to fetch meal details.");
      }
    };

    fetchMealDetails();
  }, [id]);

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!meal) {
    return <p className="loading-text">Loading meal details...</p>;
  }

  return (
    <div className="meal-info-container">
      <div className="meal-info-card">
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-info-image" />
        <p>
          <strong>Category:</strong> {meal.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {meal.strArea}
        </p>

        <h3><GiSaltShaker/>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = meal[`strIngredient${i + 1}`];
            const measure = meal[`strMeasure${i + 1}`];
            return (
              ingredient &&
              ingredient.trim() && (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              )
            );
          })}
        </ul>

        <h3><GiChefToque/>Instructions:</h3>
        <p className="instructions">{meal.strInstructions}</p>

        <button className="discover-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft style={{ marginRight: "8px" }}/> Back
        </button>
      </div>
    </div>
  );
};

export default Recipeinstruction;
