import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent } from './features/ProductSlice'; // Ensure the correct path
import isEmpty from 'lodash/isEmpty'; // Importing lodash isEmpty function
import { useGetProductsByTitleQuery } from './ProductsApi/ProductsApi';

function App() {
 
const {data}= useGetProductsByTitleQuery() 

console.log(data)

  return (

<>

</>

  )
}

export default App;
