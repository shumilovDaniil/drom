import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types/types";

interface carsState {
  cars: ICar[],
  status: "loading" | "succeeded" | "failed" | "idle",
  error: null | string | undefined
}

const initialState: carsState = {
  cars: [],
  status: "idle",
  error: null
};

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`http://localhost:3001/cars?page=${page}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("error in fetchCars function");
      }
      const data = await response.json();
      dispatch(refreshCars(data));
      return data;
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;

      return rejectWithValue({ message });
    }
  }
);

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    refreshCars: (state, action) => {
      state.cars = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state: carsState, action) => {
        state.status = "succeeded";
        if (action.payload) {
          state.cars = state.cars.concat(action.payload);
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { refreshCars } = carsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCars = (state: RootState) => state.cars.cars;

export default carsSlice.reducer;

