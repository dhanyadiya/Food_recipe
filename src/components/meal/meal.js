import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./meal.css";
import { FaUtensils,FaArrowLeft } from "react-icons/fa";

const Meal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ingredient = location.state?.ingredient || "";
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) return;

    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();

        if (data.meals) {
          setMeals(data.meals);
        } else {
          setError(" No meals found for this ingredient.");
        }
      } catch {
        setError("Failed to fetch meals. Try again later.");
      }
    };

    fetchMeals();
  }, [ingredient]);

  const handleMealClick = (id) => {
    navigate(`/recipeinstruction/${id}`); 
  };

  return (
    <div className="home-container2">
      <div className="overlay2">
        <div className="content2">
          <h2><FaUtensils style={{ color: "white", marginRight: "8px" }} />Recipes with "{ingredient}"</h2>

          {error && <p className="error-text">{error}</p>}

          <div className="meal-list">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="meal-card"
                onClick={() => handleMealClick(meal.idMeal)} 
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="meal-image"
                />
                <h3>{meal.strMeal}</h3>
              </div>
            ))}
          </div>

          <button className="discover-btn" onClick={() => navigate("/Getrecipe")}>
            <FaArrowLeft style={{ marginRight: "8px" }} /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
