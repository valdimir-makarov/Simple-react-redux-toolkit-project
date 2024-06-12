import React from 'react';
import { useGetProductsByTitleQuery } from '../ProductsApi/ProductsApi';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/CartSlice';

export const ProductList = () => {
  const { data, error, isLoading } = useGetProductsByTitleQuery();
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.cartArray);

  const handleAddition = (item) => {
    dispatch(addProduct(item));
  };

  // Add debug logs to check data structure
  console.log('Data:', data);
  console.log('Cart Array:', cartArray);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      {data && data.products ? (
        <ul>
          {data.products.map((item, index) => (
            <li key={index}>
              {item.id}
              <span>
                <button
                  className='bg-orange-500'
                  onClick={() => handleAddition(item)}
                >
                  Add to Cart
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};
