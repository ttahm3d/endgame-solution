import React from "react";
import { useProducts } from "./ProductContext/Context";
import "./styles.css";

export default function App() {
  const { products, state, dispatch } = useProducts();
  return (
    <>
      <div>
        <fieldset>
          <legend>Sort By</legend>
          <label htmlFor="sort-low-to-high">
            <input
              type="radio"
              id="sort-low-to-high"
              name="sortBy"
              value="low-to-high"
              checked={state.sortBy === "low-to-high"}
              onChange={(e) => {
                dispatch({
                  type: "SORT_BY",
                  payload: e.target.value
                });
              }}
            />
            Low to high
          </label>
          <label htmlFor="sort-hight-to-low">
            <input
              type="radio"
              id="sort-hight-to-low"
              name="sortBy"
              value="high-to-low"
              checked={state.sortBy === "high-to-low"}
              onChange={(e) => {
                dispatch({
                  type: "SORT_BY",
                  payload: e.target.value
                });
              }}
            />
            High to low
          </label>
        </fieldset>
      </div>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
