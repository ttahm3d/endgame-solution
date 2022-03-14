import React from "react";
import { useProducts } from "./ProductContext/Context";
import "./styles.css";

export default function App() {
  const { products, state, dispatch } = useProducts();
  console.log(state);
  return (
    <>
      <div style={{ padding: "2rem 0.5rem" }}>
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
        <fieldset>
          <legend>Stock</legend>
          <label htmlFor="include-out-of-stock">
            <input
              type="checkbox"
              id="include-out-of-stock"
              checked={state.showOnlyInStock ? true : false}
              onChange={(e) =>
                dispatch({ type: "OUT_OF_STOCK", payload: e.target.checked })
              }
            />
            Hide out of stock items
          </label>
        </fieldset>
        <fieldset>
          <legend>Fast Delivery</legend>
          <label htmlFor="only-fast-delivery">
            <input
              type="checkbox"
              id="only-fast-delivery"
              checked={state.showOnlyFastDelivery ? true : false}
              onChange={(e) =>
                dispatch({ type: "FAST_DELIVERY", payload: e.target.checked })
              }
            />
            Fast Delivery
          </label>
        </fieldset>
        <fieldset>
          <legend>Price Range</legend>
          <input
            type="range"
            min={0}
            max={1000}
            step={100}
            list="tickmarks"
            value={state.minPrice}
            onChange={(e) =>
              dispatch({
                type: "MIN_PRICE",
                payload: e.target.value
              })
            }
          />
          <datalist id="tickmarks">
            <option value="0" label="0"></option>
            <option value="100"></option>
            <option value="200"></option>
            <option value="300"></option>
            <option value="400"></option>
            <option value="500" label="500"></option>
            <option value="600"></option>
            <option value="700"></option>
            <option value="800"></option>
            <option value="900"></option>
            <option value="1000" label="1000"></option>
          </datalist>
        </fieldset>
        <div style={{ padding: "1rem 0" }}>
          <button onClick={() => dispatch({ type: "RESET" })}>
            reset all filters
          </button>
        </div>
      </div>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(13rem, 1fr))"
        }}
      >
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
