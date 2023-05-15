import { configureStore } from '@reduxjs/toolkit'

import { ProductSlice } from './ProductSlice'

export default configureStore({
    reducer: {
        products:ProductSlice
    },
})

// import { combineReducers } from 'redux';

// import { ProductSlice } from './ProductSlice';

// export default configureStore({
//   reducer: {
//   combineReducers({
//     products: ProductSlice.reducer
//   })
// });
