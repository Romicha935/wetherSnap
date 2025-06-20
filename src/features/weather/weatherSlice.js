import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "e874f2444662bbebd5d666a1d620b137";

 export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async(city, thunkAPI) => {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        )
        const data =await response.json()
        if(!response.ok){
            throw new Error(data.message || 'faild to fetch weather')
        }
        return data
    }
)

const initialState = {
    city: "Dhaka",
    date: null,
    loading:false,
    error:null,
}

const weatherSlice = createSlice ({
    name:"weather",
    initialState,
    reducers:{
      setCity: (state,action)=> {
        state.city = action.payload
      }
    },

    extraReducers: (builder)=> {
        builder
        .addCase(fetchWeather.pending , (state)=> {
            state.loading  = true;
            state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state,action)=> {
           state.loading = false;
           state.data = action.payload;
        })
        .addCase(fetchWeather.rejected,(state,action)=> {
            state.loading = false;
            state.error = action.error.message;
        })
         
    }

})

export  const {setCity} = weatherSlice.actions;
export default weatherSlice.reducer