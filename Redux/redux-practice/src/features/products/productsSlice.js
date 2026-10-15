import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue })  => {
        const response = await fetch("https://fakestoreapi.com/products1");
        if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          message: `Request failed: ${response.statusText}`,
        });
      }
        return response.json();
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        loading:true,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state) =>{
            state.loading= true;
            state.error = null;
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })       
    }
})

export default productsSlice.reducer;