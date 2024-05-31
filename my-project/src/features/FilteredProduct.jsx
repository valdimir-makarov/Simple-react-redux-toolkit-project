import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent, setFilter } from '../features/ProductSlice'; // Correct path to ProductSlice
import isEmpty from 'lodash/isEmpty'; // Importing lodash isEmpty function

const FilteredProduct = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products); // Get the full list of products
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  const filter = useSelector((state) => state.products.filter);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  // Function to filter products based on the search term
  const filterProducts = (term) => {
    return products.filter((product) =>
      product.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Update the filter state and filtered products when the search input changes
  const handleSearch = (e) => {
    const term = e.target.value;
    dispatch(setFilter(term)); // Update filter state
  };

  return (
    <div>
      <h1>Product List</h1>
      <form>
        <input
          type="text"
          placeholder="Filter products"
          value={filter}
          onChange={handleSearch} // Call handleSearch when the input changes
        />
      </form>
     
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isEmpty(filteredProducts) ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {filteredProducts?.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilteredProduct;
