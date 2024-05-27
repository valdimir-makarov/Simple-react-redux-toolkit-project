import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent } from './features/ProductSlice'; // Correct path to ProductSlice
import isEmpty from 'lodash/isEmpty'; // Importing lodash isEmpty function

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isEmpty(products) ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.title}</li> // Adjust based on the actual structure of the product object
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
