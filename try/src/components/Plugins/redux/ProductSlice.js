import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        addproduct: (state, action) => {
            state.products.push(action.payload.products)
          },
          
        
    },
})

// Action creators are generated for each case reducer function
export const { addproduct} = ProductSlice.actions

export default ProductSlice.reducer