import React, { useState } from "react";
import "./getrecipe.css";
import getrecipeback from "../assets/getrecipeback.svg";
import { FaAppleAlt, FaLeaf, FaUtensils, FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GetRecipe = () => {
  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!ingredient.trim()) {
      setError("⚠️ Please enter an ingredient!");
      return;
    }
    // Navigate to results page with ingredient as state
    navigate("/meal", { state: { ingredient } });
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${getrecipeback})` }}
    >
      <div className="overlay">
        <div className="content">
          <div className="card-section">
            <div className="info-card">
              <FaAppleAlt className="icon" />
              <h3>Healthy Eating</h3>
              <p>Choose balanced and nutritious ingredients for every meal.</p>
            </div>

            <div className="info-card">
              <FaLeaf className="icon" />
              <h3>Fresh Ingredients</h3>
              <p>Cook with the freshest produce for the best flavor.</p>
            </div>

            <div className="info-card">
              <FaUtensils className="icon" />
              <h3>Easy Recipes</h3>
              <p>Follow simple steps to create restaurant-quality dishes.</p>
            </div>

            <div className="info-card">
              <FaHeartbeat className="icon" />
              <h3>Healthy Lifestyle</h3>
              <p>Eating well is the first step to a happy, energetic life.</p>
            </div>
          </div>

          <p className="description">
            Simply enter the ingredients you have — like chicken, mushroom, or
            tomato — and Cookify instantly finds delicious recipes you can make.
          </p>

          <div className="input-section">
            <label htmlFor="ingredients" className="input-label">
              Enter Ingredients:
            </label>
            <input
              type="text"
              id="ingredients"
              placeholder="e.g., chicken, tomato, mushroom"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="input-box"
            />
          </div>

          <button className="discover-btn" onClick={handleSearch}>
            Discover Recipes
          </button>

          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default GetRecipe;
